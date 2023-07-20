import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Admin() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect((navigate) => {
    axios.get("http://localhost:5000/auth/admin").then((res) => {
      if (res.data.Status === "Success") {
        navigate("/admin");
      } else {
        navigate("/login");
      }
    });
  }, []);
  return (
    <div>
      <div>Admin</div>
    </div>
  );
}

export default Admin;
