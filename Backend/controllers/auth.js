import User from "../Schemas/userSchema.js";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import express from "express";


const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

    console.log(req.body);

    const userdoc = await User.findOne({ email: loginEmail });
    console.log(userdoc);
    const result = await bcrypt.compare(loginPassword, userdoc.password);
    if (result) {
      console.log("successful login");
      const token = await userdoc.generateAuthToken();
      console.log("the token is " + token);
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 900000),
        httpOnly: true,
      });
      res.status(200).json({ message: "login successful", jwtToken: token });
      
    } else {
      res.send("Invalid login info");
    }
  } catch (e) {
    console.log(e);
    res.status(500).send("Error occurred during login");
  }
};
