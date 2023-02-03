const router = require("express").Router();
const kategories = require("../controllers/kategoriesController");

router.get("/api/v0/kategories", kategories.getKategori);
router.get("/api/v0/kategories/:id", kategories.kategoriById);
router.get("/api/v0/nameKategories", kategories.kategoriByName);

module.exports = router;
