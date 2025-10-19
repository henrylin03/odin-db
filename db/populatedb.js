#! /usr/bin/env node

// this script is designed to be run _once only_
const { Client } = require("pg");

require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
  const roleName = process.env.USER_NAME;
  const rolePassword = process.env.USER_PASSWORD;

  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${roleName}:${rolePassword}@localhost:5432/top_users`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
