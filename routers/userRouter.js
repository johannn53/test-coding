const router = require("express").Router();
const user = require("../controllers/userController");
const auth = require("../middlewares/auth");

router.get("/api/v0/all", auth, user.getAllUser);
router.post("/api/v0/update/:id", auth, user.updateUser);
router.delete("/api/v0/delete/:id", auth, user.deleteUser);

module.exports = router;
