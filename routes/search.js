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
          images: true
        }
      });
      return res.status(200).json(serializer.SerializeBigInt(products));
    }
    const products = await prisma.$queryRaw(Prisma.sql`SELECT * FROM "Product"
      WHERE SIMILARITY(name, ${searchTerm}) > 0.1
         OR SIMILARITY(COALESCE(description, ''), ${searchTerm}) > 0.1
      ORDER BY GREATEST(
        SIMILARITY(name, ${searchTerm}),
        SIMILARITY(COALESCE(description, ''), ${searchTerm})
      ) DESC
      LIMIT 100`);
    
    res.json(serializer.SerializeBigInt(products));
  } catch (error) {
    console.error("Error searching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;