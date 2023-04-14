import express from 'express'
const app = express();
import mongoose from 'mongoose';
import { register } from './controllers/auth.js';
import { login } from './controllers/auth.js';
import cors from 'cors';
app.use(express.json());

app.use(cors());
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://telisanket2002:dpYFDWYVHRksyGfK@cluster0.wjezzne.mongodb.net/optiiMind",
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