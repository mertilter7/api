const router = require("express").Router();
const { userRouter } = require("./userRoute");
const { newsRouter } = require("./newsRoute");
const { slidesRouter } = require("./slidesRoute");
const { productsRouter } = require("./productsRoute");
// const { categoriesRouter } = require("./categoriesRoute");

router.use("/users", userRouter); 
router.use("/news", newsRouter); 
router.use("/slides", slidesRouter);
router.use("/products", productsRouter); 

// router.use("/categories", categoriesRouter); 

module.exports = { router };