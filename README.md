# odin-db

This is to practice setting up PostgreSQL database with ExpressJS app.

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
