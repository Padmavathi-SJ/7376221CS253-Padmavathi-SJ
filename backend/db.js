import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "padmacs253",
  database: "social_media",
  waitForConnections: true,
  connectionLimit: 10,  
  queueLimit: 0,
});

export default pool;
