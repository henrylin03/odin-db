const { Pool } = require("pg");
require("dotenv").config();

module.exports = new Pool({
  host: "localhost",
  user: process.env.USER_NAME,
  database: "top_users",
  password: process.env.USER_PASSWORD,
  port: 5432,
});

// alt way of defining connection through Connection URI
// module.exports = new Pool({
//   connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
// });
