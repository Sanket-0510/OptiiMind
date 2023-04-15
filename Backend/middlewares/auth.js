import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Schemas/userSchema";
import { SECRET_KEY } from "../config";
export const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
    const user = await Stud.findOne({ _id: verifyUser._id });
    console.log(user);
    console.log(verifyUser);
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    console.log(e);
  }
};

