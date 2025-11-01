# Usernames Database

Full-stack CRUD application to store usernames. Also includes search functionalities.

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; width: 100%">
    <img src="./public/screenshots/homepage.png" />
    <img src="./public/screenshots/search-results.png" />
</div>

<br />

- **_Why:_** This project is part of The Odin Project's "NodeJS Course", as the assignment of the ["Using PostgreSQL" lesson](https://www.theodinproject.com/lessons/nodejs-using-postgresql) to practice setting up a PostgreSQL database within an Express JS application.
- **_Tech:_** Express JS backend, PostgreSQL database, [EJS (Embedded JavaScript templates)](https://ejs.co/) views, and [PicoCSS](https://picocss.com/) styling (UI library).

## How to run app

To start Express JS app, run:

```bash
npm run dev
```

## How to set up local and populate DB

The `db/populatedb.js` script creates and seeds db with initial data.

The script accepts a database URL as the CLI argument using `process.argv[2]`. This allows you to populate any db (local _or_ prod) from your machine, without having to modify environment variables.

If a CLI argument for database URL is not provided, local database is populated by default.

```bash
# Populate local database (run once at start)
node db/populatedb.js "postgresql://username:password@localhost:5432/top_users"

# Populate production database (run once after deployment)
node db/populatedb.js <prod-db-url>
```

**Note**: This script should only be run once per database to avoid duplicate data.
