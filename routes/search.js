import express from "express";
import { Prisma, prisma } from "../lib/prisma.js";
import { SerializeBigInt } from "../lib/serializeBigInt.js";

const router = express.Router();
const serializer = new SerializeBigInt();

router.get('/list', async (req, res) => {
  try {
    const searchTerm = req.query.search;
    console.log("Search term:", searchTerm);
    if (!searchTerm) {
      const products = await prisma.product.findMany({
        take: 100,
        include: {
          images: {
            where: {
              isCover: true
            }
          }
        }
      });
      return res.status(200).json(serializer.SerializeBigInt(products));
    }
    const similarityThreshold = 0.1;
    const maxResults = 100;
    const products = await prisma.$queryRaw(Prisma.sql`
      SELECT 
        product.*, 
        json_agg(row_to_json(img)) FILTER (WHERE img.id IS NOT NULL) as images
      FROM "Product" as product
      LEFT JOIN "ProductImage" as img ON product.id = img."productId" AND img."isCover" = true
      WHERE 
        SIMILARITY(product.name, ${searchTerm}) > ${similarityThreshold}
        OR SIMILARITY(COALESCE(product.description, ''), ${searchTerm}) > ${similarityThreshold}
      GROUP BY product.id
      ORDER BY GREATEST(
        SIMILARITY(product.name, ${searchTerm}),
        SIMILARITY(COALESCE(product.description, ''), ${searchTerm})
      ) DESC
      LIMIT ${maxResults}
    `);
    
    res.json(serializer.SerializeBigInt(products));
  } catch (error) {
    console.error("Error searching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;