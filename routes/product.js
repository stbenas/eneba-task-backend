import express from "express";
import { Prisma, prisma } from "../lib/prisma.js";
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

router.post('/', async (req, res) => {
  try {
    const { name, description, priceCents, currency, market, vendorName, discountPercent, cashbackPercent, images } = req.body;

    if (!name || !priceCents || !currency || !description || !vendorName || !images) {
      return res.status(400).json({ error: "Missing required fields, The request body must include the following: name, description, priceCents, currency, vendorName, images. Optional values: market, discountPercentage, cashbackPercentage" });
    }

    if (typeof images !== 'object' || Object.keys(images).length === 0) {
      return res.status(400).json({ error: "Images must be a non-empty object and one image must be specified as the cover image with isCover set to true." });
    }

    if (typeof priceCents !== 'number' || priceCents < 0 || !Number.isInteger(priceCents)) {
      return res.status(400).json({ error: "priceCents must be a non-negative integer." });
    }

    if (discountPercent !== undefined) {
      if (typeof discountPercent !== 'number' || discountPercent < 0 || discountPercent > 100) {
        return res.status(400).json({ error: "discountPercent must be a number between 0 and 100." });
      }
    }

    if (cashbackPercent !== undefined) {
      if (typeof cashbackPercent !== 'number' || cashbackPercent < 0 || cashbackPercent > 100) {
        return res.status(400).json({ error: "cashbackPercent must be a number between 0 and 100." });
      }
    }

    const imagesArray = Object.values(images);
    let coverImageCounter = 0;
    imagesArray.forEach(image => {
      if (image.isCover === 'true' || image.isCover === true) {
        coverImageCounter++;
      }
    });
    if (coverImageCounter === 0) {
      return res.status(400).json({ error: "One image must be specified as the cover image with isCover set to true." });
    }

    if (coverImageCounter > 1) {
      return res.status(400).json({ error: "Only one image can be specified as the cover image with isCover set to true." });
    }

    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        priceCents,
        currency,
        market: market ? market : undefined,
        vendorName,
        discountPercent: discountPercent ? new Prisma.Decimal(discountPercent) : undefined,
        cashbackPercent: cashbackPercent ? new Prisma.Decimal(cashbackPercent) : undefined,
        images: {
          create: imagesArray.map(image => ({
            imageUrl: image.imageUrl,
            isCover: image.isCover ? true : false,
          })),
        },
      },
      include: {
        images: true,
      },
    });
    
    return res.status(201).json(serializer.SerializeBigInt(newProduct));
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;