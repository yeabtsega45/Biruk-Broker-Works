import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Admin() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:5000/auth/admin", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/admin");
          console.log(res.data);
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
