import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import router from './router/homeRouter.js';

const app = express();
const port = process.env.PORT || '8000';
const DATABASE_URL = process.env.DATABASE_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DATABASE_URL);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', router);
app.use('/detail', router);
app.use('/signIn', router);
app.use('/singleproduct', router);

connectDB().then(() => {
  app.listen(port, () => {
    console.log('listening for requests');
  });
});
