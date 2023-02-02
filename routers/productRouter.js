const router = require("express").Router();
const product = require("../controllers/productController");

router.get("/api/v0/getProd", product.getAllProduct);

module.exports = router;
