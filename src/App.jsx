import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import ShowInfo from "./components/ShowInfo.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 p-4 text-center text-white">
        <h1 className="text-3xl font-bold">Social Media App</h1>
      </header>
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-info" element={<ShowInfo />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
