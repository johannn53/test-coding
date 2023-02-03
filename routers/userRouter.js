const router = require("express").Router();
const user = require("../controllers/userController");
const auth = require("../middlewares/auth");

router.get("/api/v0/all", auth, user.getAll);

module.exports = router;
