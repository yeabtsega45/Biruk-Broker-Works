import React from "react";
import "./PageContainer.css";
import Car from "../Components/Car";
import { Link } from "react-router-dom";

function AdminCars() {
  return (
    <div className="properties">
      <Link to="/admin/cars/add" className="btn btn-success">
        Add Car
      </Link>
      <Car />
    </div>
  );
}

export default AdminCars;
