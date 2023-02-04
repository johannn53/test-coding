const router = require("express").Router();
const product = require("../controllers/product/productController");

router.get("/api/v0/getProd", product.getAllProduct);
router.get("/api/v0/getProdAsc", product.getAllProdAsc);

module.exports = router;
