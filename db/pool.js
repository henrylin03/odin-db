const { Pool } = require("pg");
require("dotenv").config();

module.exports = new Pool({
  host: "localhost",
  user: process.env.USER_NAME,
  database: "top_users",
  password: process.env.USER_PASSWORD,
  port: 5432,
});
