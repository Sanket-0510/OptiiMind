import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { auth } from './middlewares/auth.js';
import { register, login } from './controllers/auth.js';
import profile from './controllers/profile.js';
import dotenv from 'dotenv-flow';
import { chat, chatgptData } from './controllers/aimind.js';

const app = express();
const PORT = process.env.PORT || 8000;
const API_KEY = process.env.API_KEY
dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: ['https://optiimind.vercel.app', 'http://localhost:5173'],
  })
);

// Handle preflight requests
app.options('*', cors());

mongoose.set('strictQuery', false);

mongoose
  .connect(process.env.DATABASE_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connected');
  })
  .catch((e) => {
    console.log(e);
  });

app.get('/profile', async (req, res) => {
  res.send('Welcome');
});

app.get('/', async (req, res) => {
  res.send('Welcome to the home page');
});

app.post('/register', register);
app.post('/login', login);
app.get('/profile', auth, profile);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post('/chat', chat);
app.get('/chat', chatgptData);


app.post("/completions", async(req,res)=>{
      try{
       const response = await fetch("https://api.openai.com/v1/chat/completions",{
        method: "POST",
        headers:{
          "Authorization": "Bearer "+ API_KEY,
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          "model": "gpt-3.5-turbo",
          "message": [{"role": "user", "content": req.body.prompt}]
          
        })

       })
       const data = await response.json();
       res.send(data)
      }


       catch(e){
            console.log(e)
       }

})