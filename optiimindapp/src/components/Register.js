import React from "react";
import { useState } from "react";
import axios from 'axios';


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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your full name"
          value={userName}
          onChange={(e)=>setuserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter your email Id"
          value={email}
          onChange={(e)=>setemail(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter your mobileNo"
          value={mobileNo}
          onChange={(e)=>setmobileNo(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter your password"
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="confirmPassword"
          value={confirmPassword}
          onChange={(e)=>setconfirmPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Register;
