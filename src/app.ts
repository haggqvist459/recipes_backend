import express from 'express';
import { authRoutes } from './routes';
import { errorHandler } from './middleware'

const app = express();
const PORT = 3001;

app.use(express.json());

app.use('/auth', authRoutes);

app.use(errorHandler)

app.listen(PORT, () => {
  console.log("Server running on port: ", PORT)
});