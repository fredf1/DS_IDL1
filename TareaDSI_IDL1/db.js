const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "SI_IDL1",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

/*const pool = mysql.createPool({
  host: "mysql-natureza.alwaysdata.net",
  user: "natureza_equipo8",
  password: "@1364750@",
  database: "natureza_db8",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});*/

module.exports = pool;