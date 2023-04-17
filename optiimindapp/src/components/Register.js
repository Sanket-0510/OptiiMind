import React from "react";
import { useState } from "react";
import axios from 'axios';
import '../Styles/register.css'

const Register = () => {
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [mobileNo, setmobileNo] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8000/register", {
        userName,
        email,
        mobileNo,
        password,
        confirmPassword,
      });
    } catch(e){
      console.log(e);
    }
  };
  return (
    <>
    <div className="parent-container">
      <div className="form-container">
        <div className="form-heading">Sign Up</div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Name"
          value={userName}
          onChange={(e)=>setuserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e)=>setemail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contact No"
          value={mobileNo}
          onChange={(e)=>setmobileNo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="ConfirmPassword"
          value={confirmPassword}
          onChange={(e)=>setconfirmPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      </div>
    </div>
    </>
  );
};

export default Register;
