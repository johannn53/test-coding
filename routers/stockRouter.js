const router = require("express").Router();
const stock = require("../controllers/product/stockController");

router.get("/api/v0/getStock", stock.getStock);

module.exports = router;
