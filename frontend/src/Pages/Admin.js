import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Admin() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:5000/auth/admin")
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/admin");
        }
      })
      .catch((err) => {
        navigate("/login");
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div>Admin</div>
    </div>
  );
}

export default Admin;
