import express from 'express';
import dotenv from 'dotenv';
import searchRoutes from "./routes/search.js";
import productRoutes from "./routes/product.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/product", productRoutes);
app.use("/", searchRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});