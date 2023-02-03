const router = require("express").Router();

const userRouter = require("../routers/userRouter");
const stockRouter = require("../routers/stockRouter");
const productRouter = require("../routers/productRouter");
const kategoriesRouter = require("../routers/kategoriesRouter");

router.use(userRouter);
router.use(stockRouter);
router.use(productRouter);
router.use(kategoriesRouter);

module.exports = router;
