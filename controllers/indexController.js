const path = require("path");
const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames:", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}

async function createUsernameGet(req, res) {
  const htmlFormFilePath = path.join(__dirname, "../public/form.html");
  res.sendFile(htmlFormFilePath);
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
};
