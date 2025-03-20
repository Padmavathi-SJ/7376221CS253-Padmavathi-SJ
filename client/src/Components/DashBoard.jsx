import React from "react";
import TopUsers from "./TopUsers";

const Dashboard = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Dashboard
      </h1>
      <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Top 5 Users</h2>
        <TopUsers />
      </div>
    </div>
  );
};

export default Dashboard;
