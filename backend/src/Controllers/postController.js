import db from "../../db.js"; // Import your MySQL connection

// Get posts with the maximum number of comments
export const getMaxCommentedPosts = async (req, res) => {
    try {
        const query = `
            SELECT p.id, p.content, COUNT(c.id) AS comment_count 
            FROM posts p 
            JOIN comments c ON p.id = c.post_id 
            GROUP BY p.id 
            HAVING comment_count = (
                SELECT MAX(comment_count) FROM (
                    SELECT COUNT(c.id) AS comment_count 
                    FROM posts p 
                    JOIN comments c ON p.id = c.post_id 
                    GROUP BY p.id
                ) AS subquery
            )`;

        const [rows] = await db.execute(query);

        res.status(200).json(rows);
    } catch (error) {
        console.error("Error fetching top commented posts:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


// Get latest posts (newest first)
export const getLatestPosts = async (req, res) => {
    try {
        const query = `SELECT * FROM posts ORDER BY created_at DESC`; // Assuming `created_at` is a timestamp column
        const [rows] = await db.execute(query);

        res.status(200).json(rows);
    } catch (error) {
        console.error("Error fetching latest posts:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
