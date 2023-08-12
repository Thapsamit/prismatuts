const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const app = express();

app.get("/create-product", async (req, res) => {
  const newProduct = await prisma.product.create({
    data: {
      name: "Product 1",
      description: "Product 1 description",
      price: 1000,
    },
  });
  return res.json({ newProduct: newProduct });
});
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
