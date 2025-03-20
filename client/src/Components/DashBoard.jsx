import { useState } from "react";
import { Users, Flame, FilePlus } from "lucide-react";
import TopUsers from "./TopUsers";
import TopPosts from "./TopPosts";
import NewPosts from "./NewPost";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="p-5 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-6">Dashboard</h1>

      <div className="flex flex-wrap justify-center gap-4">
        <div
          className="cursor-pointer bg-white shadow-md rounded-lg p-6 w-64 text-center hover:bg-blue-100 transition"
          onClick={() => setActiveTab("TopUsers")}
        >
          <Users className="mx-auto mb-2" size={32} />
          <h2 className="font-bold">Top Users</h2>
        </div>

        <div
          className="cursor-pointer bg-white shadow-md rounded-lg p-6 w-64 text-center hover:bg-green-100 transition"
          onClick={() => setActiveTab("TopPosts")}
        >
          <Flame className="mx-auto mb-2" size={32} />
          <h2 className="font-bold">Top Posts</h2>
        </div>

        <div
          className="cursor-pointer bg-white shadow-md rounded-lg p-6 w-64 text-center hover:bg-yellow-100 transition"
          onClick={() => setActiveTab("NewPosts")}
        >
          <FilePlus className="mx-auto mb-2" size={32} />
          <h2 className="font-bold">New Posts</h2>
        </div>
      </div>

      <div className="mt-6">
        {activeTab === "TopUsers" && <TopUsers />}
        {activeTab === "TopPosts" && <TopPosts />}
        {activeTab === "NewPosts" && <NewPosts />}
      </div>
    </div>
  );
};

export default Dashboard;
