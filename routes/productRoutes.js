const express = require("express");
const router = express.Router();
const products = require("../data/products");

// Get all products
router.get("/", (req, res) => {
  res.json(products);
});

// Get product by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  product
    ? res.json(product)
    : res.status(404).json({ message: "Product not found" });
});

module.exports = router;
