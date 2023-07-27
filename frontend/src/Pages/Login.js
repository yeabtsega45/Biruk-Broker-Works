import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/auth/login", values)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          navigate("/admin");
        }
      })
      .catch((err) => {
        setError("Wrong password");
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="text-danger">{error}</div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email..."
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password..."
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
