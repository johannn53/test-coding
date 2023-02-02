const router = require("express").Router();
const user = require("../controllers/userController");
const auth = require("../middlewares/auth");

router.post("/api/v0/login", user.loginUser);
router.get("/api/v0/all", auth, user.getAll);

module.exports = router;
