import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import { Routes, Route } from "react-router-dom";
import Houses from "./Pages/Houses";
import Cars from "./Pages/Cars";
import Lands from "./Pages/Lands";
import RentalHouses from "./Pages/RentalHouses";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import AddProperty from "./Pages/AddProperty";
import EditProperty from "./Pages/EditProperty";
import AdminHouses from "./Pages/AdminHouses";
import AdminCars from "./Pages/AdminCars";
import AddCar from "./Pages/AddCar";
import EditCar from "./Pages/EditCar";
import Home from "./Pages/Home";
import BottomBar from "./Components/BottomBar";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Home />
              <About />
              <BottomBar />
            </>
          }
        />
        <Route
          path="/houses"
          element={
            <>
              <Nav />
              <Houses />
              <BottomBar />
            </>
          }
        />
        <Route
          path="/cars"
          element={
            <>
              <Nav />
              <Cars />
              <BottomBar />
            </>
          }
        />
        <Route
          path="/lands"
          element={
            <>
              <Nav />
              <Lands />
              <BottomBar />
            </>
          }
        />
        <Route
          path="/rentalhouses"
          element={
            <>
              <Nav />
              <RentalHouses />
              <BottomBar />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="" element={<AdminHouses />}></Route>
          <Route path="/admin/add" element={<AddProperty />}></Route>
          <Route path="/admin/edit/:id" element={<EditProperty />}></Route>
          <Route path="/admin/cars" element={<AdminCars />}></Route>
          <Route path="/admin/cars/add" element={<AddCar />}></Route>
          <Route path="/admin/cars/edit/:id" element={<EditCar />}></Route>
          {/* <Route path="/lands" element={<AdminLands />}></Route> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
