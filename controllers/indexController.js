const db = require("../db/queries");

async function getUsernames(req, res) {
  const searchbarValue = req.query.search;
  let isFiltered = false;

  if (searchbarValue === "" || searchbarValue === undefined) {
    const usernames = await db.getAllUsernames();
    res.render("index", { title: "Users", usernames, isFiltered });
  } else {
    const searchedUsernames = await db.getUsernames(searchbarValue);
    isFiltered = true;

    res.render("index", {
      title: "Search results",
      usernames: searchedUsernames,
      isFiltered,
      searchbarValue,
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
