require("dotenv").config();

const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.PGUSER,
  host: "localhost",
  database: "rest_api_tutorial",
  password: process.env.PGPASSWORD,
  port: 5432,
});

