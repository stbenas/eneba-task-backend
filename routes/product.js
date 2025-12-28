import express from "express";
import { prisma } from "../lib/prisma.js";
import { SerializeBigInt } from "../lib/serializeBigInt.js";

const router = express.Router();
const serializer = new SerializeBigInt();

router.get('/:id', async (req, res) => {
  try {
    let productId;
    try {
      productId = BigInt(req.params.id);
    } catch (error) {
      return res.status(400).json({ error: "Invalid product ID" });
    }

    const product = await prisma.product.findUnique({
      where: { id: productId },
      include: {
        images: true,
        reviews: true,
      },
    });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    return res.status(200).json(serializer.SerializeBigInt(product));
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;