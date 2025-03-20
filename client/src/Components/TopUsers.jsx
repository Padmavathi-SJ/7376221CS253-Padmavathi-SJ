import { useEffect, useState } from "react";
import axios from "axios";

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/top-users") // Adjust your backend URL
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching top users:", error);
      });
  }, []);

  return (
    <div>
      <h2>Top 5 Users with Most Posts</h2>
      <ul>
        {users.map((user, index) => (
          <li key={user.user_id || index}>
            {user.username} - {user.post_count} posts
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
