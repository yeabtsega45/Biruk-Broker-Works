import React from "react";
import "./AdminContainer.css";
import Property from "../Components/Property";
import { Link } from "react-router-dom";

function AdminHouses() {
  return (
    <div className="properties">
      <Link to="/admin/add" className="btn btn-success">
        Add Property
      </Link>
      <Property />
    </div>
  );
}

export default AdminHouses;
