import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { auth } from './middlewares/auth.js';
import { register, login } from './controllers/auth.js';
import profile from './controllers/profile.js';
import dotenv from 'dotenv-flow';
import { chat, chatgptData } from './controllers/aimind.js';
import fetch from 'node-fetch';
const app = express();
const PORT = process.env.PORT || 8001;

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
  .connect("mongodb+srv://telisanket2002:C3L3y0RMYFL5uTq4@cluster0.zj7rqdf.mongodb.net/?retryWrites=true&w=majority", {
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


app.post("/completions", async (req, res) => {
  try {
     console.log(req.body.message)
    let systemMessage = {
      "role": "user",
      "content": "act as a content suggestor where you should provide me content based the parameters which I am providing you to boost my mood your name is OPtiiMind ok! in only 50 words"
  };

     var prompt =  {"role": "user", "content": req.body.message}
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + process.env.API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [
          systemMessage,
          prompt
         
        ]
      })
    });

    const data  = await response.json()
    console.log(data);
    
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});
