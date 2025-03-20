import { useEffect, useState } from "react";
import axios from "axios";

const TopPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts/top-commented")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Error fetching top posts:", err));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full md:w-1/3">
      <h2 className="text-lg font-bold mb-3 text-center">🔥 Top Posts</h2>
      
      {/* Scrollable Container */}
      <div className="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <ul className="space-y-2">
          {posts.map((post) => (
            <li
              key={post.id}
              className="p-3 border-b bg-gray-50 rounded-md hover:bg-gray-100 transition"
            >
              <p className="truncate">{post.content}</p>
              <span className="text-sm text-gray-600">💬 {post.comment_count} Comments</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopPosts;
