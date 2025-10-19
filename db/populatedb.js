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
  let connectionString = process.argv[2];
  if (!connectionString) {
    const localDatabaseUrl = `postgresql://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@localhost:5432/top_users`;

    console.error("Database URL not provided. Defaulting to local database");
    connectionString = localDatabaseUrl;
  }

  console.log("seeding...");
  const client = new Client({ connectionString: connectionString });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
