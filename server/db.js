const Pool = require("pg").Pool;
const pool = new Pool({
  connectionString:
    "postgres://yshytjczzueurj:e4c408a3321b558bb2ca87b7eb19bfb5a613714f6a29afe0a3a3d3c3f5643515@ec2-54-170-163-224.eu-west-1.compute.amazonaws.com:5432/d6ar8s7j0ra5fs",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
