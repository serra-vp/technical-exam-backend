require("dotenv").config();
const mysql = require('mysql2/promise');

const query = async (sql_query, params) => {
  const connection = await mysql.createConnection({
    connectionLimit: 10,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
  });

  const [results] = await connection.query(sql_query, params);
  return results;
}

module.exports = {query};
