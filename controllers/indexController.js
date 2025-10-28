const path = require("path");
const db = require("../db/queries");

async function getUsernames(_req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames:", usernames);
  res.render("index", { title: "Users", usernames });
}

async function createUsernameGet(_req, res) {
  res.render("form", { title: "Add new user" });
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
