const router = require("express").Router();

const userRouter = require("../routers/userRouter");
const login = require("../routers/auth/loginRouter");
const stockRouter = require("../routers/stockRouter");
const productRouter = require("../routers/productRouter");
const register = require("../routers/auth/registerRouter");
const kategoriesRouter = require("../routers/kategoriesRouter");

router.use(login);
router.use(register);
router.use(userRouter);
router.use(stockRouter);
router.use(productRouter);
router.use(kategoriesRouter);

module.exports = router;
