import pool from "../../db.js";  // Import the connection pool

export const getTopUsers = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT user_id, COUNT(*) AS post_count 
      FROM posts 
      GROUP BY user_id 
      ORDER BY post_count DESC 
      LIMIT 5
    `);

    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching top users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


