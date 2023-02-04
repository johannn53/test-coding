const router = require("express").Router();
const kategories = require("../controllers/product/kategoriesController");

router.get("/api/v0/kategories", kategories.getKategori);
router.get("/api/v0/kategories/:id", kategories.kategoriById);
router.get("/api/v0/nameKategories", kategories.kategoriByName);
router.get("/api/v0/allInfo", kategories.allProdInfo);

module.exports = router;
