import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="container">
      <div className="wrapper">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email..." />
          <input type="password" placeholder="Password..." />
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
