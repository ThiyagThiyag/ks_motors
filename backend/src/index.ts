import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Database connection (uncomment when string is provided)
/*
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ksmotors')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
*/

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'KS Motors API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
