const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexController.getUsernames);
indexRouter.get("/new", indexController.createUsernameGet);
indexRouter.post("/new", indexController.createUsernamePost);
indexRouter.get("/delete", indexController.deleteAllUsernames);

module.exports = indexRouter;
