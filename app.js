const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("usernames will be logged here - wip");
  res.end();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express app is listening on port ${PORT}`);
});
