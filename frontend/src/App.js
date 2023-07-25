import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Houses from "./Pages/Houses";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import AddProperty from "./Pages/AddProperty";
import EditProperty from "./Pages/EditProperty";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Houses />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/add" element={<AddProperty />} />
        <Route path="/edit/:id" element={<EditProperty />} />
      </Routes>
    </>
  );
}

export default App;
