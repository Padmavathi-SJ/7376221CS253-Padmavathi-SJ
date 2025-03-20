import { useEffect, useState } from "react";
import axios from "axios";

const NewPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts/latest")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Error fetching new posts:", err));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full md:w-1/3">
      <h2 className="text-lg font-bold mb-3 text-center">🆕 New Posts</h2>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="p-2 border-b">
            {post.content} - {new Date(post.created_at).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewPosts;
