import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
var data;
export const Profile = () => {
  const profile = async(req,res)=>{
     data = await axios.get("https://localhost:8000/profile");
    

  }
  return <div>
    <Link to="/profilePage">
      <button onClick={profile}>Profile</button>

    </Link>
    
  </div>;
};

export const ProfilePage= ()=>{
        const data2= data;
        return<div>
         <h1>Name : {data2.userName}</h1>
         <h1>Email: {data2.email}</h1>
         <h1>Number : {data2.mbileNo}</h1>

        </div>
}



