const db = require("../db/queries");

async function getUsernames(req, res) {
  const searchbarValue = req.query.search;

  if (searchbarValue === "" || searchbarValue === undefined) {
    const usernames = await db.getAllUsernames();
    res.render("index", { title: "Users", usernames });
  } else {
    const searchedUsernames = await db.getUsernames(searchbarValue);
    res.render("index", {
      title: "Search results",
      usernames: searchedUsernames,
    });
  }
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
