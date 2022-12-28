import mongoose from 'mongoose';

const connectDb = async (DATABASE_URL) => {
  try {
    const result = await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('connected');
    // console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
