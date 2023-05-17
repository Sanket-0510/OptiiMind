import express from 'express'
const app = express();
import mongoose from 'mongoose';
import { register } from './controllers/auth.js';
import { login } from './controllers/auth.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import profile from './controllers/profile.js'
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser())
import {auth} from './middlewares/auth.js'
import dotenv from 'dotenv-flow';
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000"
}));
mongoose.set("strictQuery", false);
import { DATABASE_KEY, SECRET_KEY } from './config.js';

mongoose
  .connect(
  DATABASE_KEY,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(
    () => {
      console.log("database connected");
    },
    (e) => {
      console.log(e);
    }
  );
  
app.listen(8000, (req, res) => {
  console.log("connected successfully");
});
app.get("/profile", async (req, res) => {
  res.send("welcome");
});
app.get("/", async (req, res) => {
  res.send("welcome to the home page");
});
app.post("/register",register);
app.post("/login",login);

app.get("/profile", auth, profile);


