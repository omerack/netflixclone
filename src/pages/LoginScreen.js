import React from "react";
import "./LoginScreen.css";

function LoginScreen() {
  return (
    <div className="login-form">
      <h2>Email</h2>
      <input />
      <h2>Password</h2>
      <input />
      <button className="btn">Login</button>
      <button className="btn">Sign Up</button>
    </div>
  );
}

export default LoginScreen;
