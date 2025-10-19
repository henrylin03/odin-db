const express = require("express");
const path = require("path");

const app = express();

const basePath = path.join(__dirname);
const options = { root: basePath };

app.use(express.static(basePath));

app.get("/", (req, res) => {
  console.log("usernames will be logged here - wip");
  res.end();
});

app.get("/new", (req, res) => {
  res.sendFile("form.html", options);
});

app.post("/new", (req, res) => {
  console.log("username to be saved: ", req.body.username);
  res.end();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express app is listening on port ${PORT}`);
});
