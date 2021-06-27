const categoriesRouter = require("express").Router();
const { categoriesController } = require("../controllers");

categoriesRouter.get("" , categoriesController.getCategories)
categoriesRouter.post("" , cateogiresController.createCategories)
categoriesRouter.get("/:id", categoriesController.getCategoriesById)
categoriesRouter.delete("/:id", cateogiresController.deleteCategories)
categoriesRouter.put("/:id" , categoriesController.updateCategories)