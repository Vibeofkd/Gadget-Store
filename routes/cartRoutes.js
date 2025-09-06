const express = require("express");
const router = express.Router();
const cart = require("../data/cart");
const products = require("../data/products");

// Get cart items with product details
router.get("/", (req, res) => {
  const cartDetails = cart.map(item => {
    const product = products.find(p => p.id === item.productId);
    return { ...item, productName: product.name, price: product.price };
  });

  res.json(cartDetails);
});

module.exports = router;
