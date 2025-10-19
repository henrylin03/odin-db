const path = require("path");
const { Router } = require("express");

const indexRouter = Router();
const htmlFormFilePath = path.join(__dirname, "../public/form.html");

indexRouter.get("/", (req, res) => {
  console.log("usernames will be logged here - wip");
  res.end();
});

indexRouter.get("/new", (req, res) => {
  res.sendFile(htmlFormFilePath);
});

indexRouter.post("/new", (req, res) => {
  console.log("username to be saved: ", req.body.username);
  res.end();
});

module.exports = indexRouter;
