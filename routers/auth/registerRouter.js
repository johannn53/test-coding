const router = require("express").Router();
const register = require("../../controllers/auth/registerController");

router.post("/api/v0/register", register.userRegister);

module.exports = router;
