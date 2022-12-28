import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './router/homeRouter.js';
import connectDb from './db/connectDb.js';

const app = express();
const port = process.env.PORT || '8000';
const DATABASE_URL = process.env.DATABASE_URI;

app.use(express.static('public'));
app.set('view engine', 'ejs');

connectDb(DATABASE_URL);

app.use('/', router);
app.use('/detail', router);
app.use('/signIn', router);
app.use('/singleproduct', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
