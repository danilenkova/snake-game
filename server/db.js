const Pool = require("pg").Pool;
const pool = new Pool({
  connectionString:
    "postgres://aywgdrscuqblke:02c5efbed47f402628cac31ae1f1b8c5775e839a5af89fe92968197dfe76957a@ec2-52-215-22-82.eu-west-1.compute.amazonaws.com:5432/d690vtltiaenqk",
  ssl: {
    rejectUnauthorized: false,
  },
  user: "aywgdrscuqblke",
  host: "ec2-52-215-22-82.eu-west-1.compute.amazonaws.com",
  database: "d690vtltiaenqk",
  password: "02c5efbed47f402628cac31ae1f1b8c5775e839a5af89fe92968197dfe76957a",
  port: 5432,
});

module.exports = pool;
