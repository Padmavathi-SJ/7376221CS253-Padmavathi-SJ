import TopUsers from "./TopUsers";
import TopPosts from "./TopPosts";
import NewPosts from "./NewPost";

const Dashboard = () => {
  return (
    <div className="p-5 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-6">📊 Dashboard</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <TopUsers />
        <TopPosts />
        <NewPosts />
      </div>
    </div>
  );
};

export default Dashboard;
