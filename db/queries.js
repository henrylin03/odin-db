const pool = require("./pool");

async function getAllUsernames() {
	const { rows } = await pool.query("SELECT * FROM usernames");
	return rows;
}

async function getUsernames(searchText) {
	const { rows } = await pool.query(
		"SELECT * FROM usernames WHERE LOWER(username) LIKE LOWER($1)",
		[`%${searchText}%`],
	);
	return rows;
}

async function insertUsername(username) {
	// `$1` inserts username into query indirectly, through pg's query-parametisation. this prevents sql injections.
	await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteAllUsernames() {
	await pool.query("DELETE FROM usernames;");
}

module.exports = {
	getAllUsernames,
	getUsernames,
	insertUsername,
	deleteAllUsernames,
};
