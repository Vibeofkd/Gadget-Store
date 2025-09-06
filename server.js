const express = require("express");
const logger = require("./middleware/logger");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

const app = express();
const PORT = 5000;

// Middleware

app.use(logger);
app.use(express.json());

// Routes
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Simple Shop Server 🛒");
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
