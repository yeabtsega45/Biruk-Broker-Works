import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Houses from "./Pages/Houses";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Houses />} />
      </Routes>
    </>
  );
}

export default App;
