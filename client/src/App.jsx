import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/DashBoard";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
