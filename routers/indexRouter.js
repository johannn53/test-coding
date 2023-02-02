const router = require("express").Router();

const userRouter = require("../routers/userRouter");
const stockRouter = require("../routers/stockRouter");
const productRouter = require("../routers/productRouter");

router.use(userRouter);
router.use(stockRouter);
router.use(productRouter);

module.exports = router;
