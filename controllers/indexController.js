const path = require("path");

exports.home = (req, res) => {
  console.log("usernames will be logged here - wip");
  res.end();
};

exports.showForm = (req, res) => {
  const htmlFormFilePath = path.join(__dirname, "../public/form.html");
  res.sendFile(htmlFormFilePath);
};

exports.createUser = (req, res) => {
  const username = req.body.username;
  console.log("username to be saved: ", req.body.username);
  res.end();
};
