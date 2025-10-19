const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexController.home);
indexRouter.get("/new", indexController.showForm);
indexRouter.post("/new", indexController.createUser);

module.exports = indexRouter;
