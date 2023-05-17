import React from "react";
import { useState } from "react";
import axios from "axios";
import '../Styles/Login.css'

const Login = () => {
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "http://localhost:8000/login",
      { loginEmail, loginPassword },
      { withCredentials: true }
    );
    setloginEmail("");
    setloginPassword("");
  };

  return (
    <div>
       
      <div className="LoginForm">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
         className="fields"
          type="text"
          placeholder="Email"
          value={loginEmail}
          onChange={(e) => {
            setloginEmail(e.target.value);
          }}
        />
        <input
          className="fields"
          type="text"
          placeholder="Password"
          value={loginPassword}
          onChange={(e) => {
            setloginPassword(e.target.value);
          }}
        />
        <button onSubmit={handleSubmit} className="fields" id="loginButton">Login</button>
        <p className="signup-para">don't have account? <a href="/signup">SignUp</a> </p>
      </form>
      </div>
    </div>
  );
};

export default Login;
