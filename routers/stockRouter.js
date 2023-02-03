const router = require("express").Router();
const stock = require("../controllers/stockController");

router.get("/api/v0/getStock", stock.getStock);

module.exports = router;
