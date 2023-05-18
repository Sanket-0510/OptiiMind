import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { auth } from './middlewares/auth.js';
import { register, login } from './controllers/auth.js';
import profile from './controllers/profile.js';
import dotenv from 'dotenv-flow';

const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  credentials: true,
  origin: 'https://optiimind-5348qhelg-sanket-0510.vercel.app/'
}));
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

app.get('https://optiimind.onrender.com/profile', async (req, res) => {
  res.send('Welcome');
});

app.get('https://optiimind.onrender.com/', async (req, res) => {
  res.send('Welcome to the home page');
});



app.post('https://optiimind.onrender.com/register', register);
app.post('https://optiimind.onrender.com/login', login);
app.get('https://optiimind.onrender.com/profile', auth, profile);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
