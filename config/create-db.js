require("dotenv").config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('Connected to the MySQL server');
});

const createDbSql = 'CREATE DATABASE IF NOT EXISTS `yondu-backend-db`';

connection.query(createDbSql, (err, results) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Database created successfully');
  //end connection
  connection.end();
  //end console
  process.exit()
});