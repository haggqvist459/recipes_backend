import express from 'express';
import cors from 'cors';
import { authRoutes } from './routes';
import { errorHandler } from './middleware'
import { ALLOWED_ORIGINS } from './constants';

const app = express();
const PORT = 3001;


app.use(cors({
  origin: (origin, callback) => {
    if(!origin) return callback(null, true);
    if(ALLOWED_ORIGINS.includes(origin)) {
      callback(null, true)
    } else 
    {
      callback(new Error("Not Allowed by CORS."))
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json());

app.use('/auth', authRoutes);

app.use(errorHandler)

app.listen(PORT, '0.0.0.0', () => {
  console.log("Server running on port: ", PORT)
});