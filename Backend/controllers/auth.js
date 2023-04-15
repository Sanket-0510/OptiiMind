import User from "../Schemas/userSchema.js";
import bcrypt from "bcrypt";
import json from 'express';
import cookieParser from "cookie-parser";
import express from 'express';
import '../Schemas/userSchema.js'

const app = express();
app.use(cookieParser());
export const register = async (req, res) => {
  try {
    const { userName, email, mobileNo, password, confirmPassword } = req.body;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      userName: userName,
      email: email,
      mobileNo: mobileNo,
      password: passwordHash,
      confirmPassword: passwordHash,
    });
    const savedUser = await newUser.save();
    console.log(savedUser);
    console.log("user saved successfully");
  } catch (e) {
    console.log(e);
  }
};

export const login = async (req, res) => {
  try {
    const { loginEmail, loginPassword } = req.body;
    console.log(loginEmail)
    const userdoc = await User.find({ email: loginEmail });
    console.log(userdoc)
    const result = bcrypt.compare(userdoc[0].password,loginPassword)
    if(result){
     const token= await userdoc[0].generateAuthToken()
     console.log("the token is "+ token);
      res.cookie("jwt", token, {
          expires: new Date(Date.now()+30000),
          httpOnly:true
      });
    }
    else{
        res.send("invalid login info")
    }
  } catch (e) {
    console.log(e);
  }
};
