import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "padmacs253",
  database: "social_media",
  waitForConnections: true,
  connectionLimit: 10,  // Adjust based on your needs
  queueLimit: 0,
});

export default pool;
