import express from 'express';
import dotenv from 'dotenv';
import searchRoutes from "./routes/search.js";
import productRoutes from "./routes/product.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

function invalidJsonHandler(err, req, res, next) {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      error: 'Invalid request body'
    });
  }

  next(err);
}

app.use(express.json());
app.use(invalidJsonHandler);

app.use("/product", productRoutes);
app.use("/", searchRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});