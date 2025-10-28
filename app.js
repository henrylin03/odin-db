const express = require("express");
const path = require("path");
const indexRouter = require("./routes/indexRouter");

const app = express();
const basePath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(basePath));

// routes
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express app is listening on port ${PORT}`);
});
