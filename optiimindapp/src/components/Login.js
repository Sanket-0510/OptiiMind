import React from "react";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const handleSubmit = async()=>{
    await axios.post("http://localhost8000/login",{loginEmail,loginPassword});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter email"
          value={loginEmail}
          onChange={(e) => {
            setloginEmail(e.target.value);
          }}
        />
         <input
          type="text"
          placeholder="enter password"
          value={loginPassword}
          onChange={(e) => {
            setloginEmail(e.target.value);
          }}
        />
        <button onSubmit={handleSubmit}>Login</button>
      </form>
    </div>
  );
};

export default Login;
