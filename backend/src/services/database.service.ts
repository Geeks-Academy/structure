import mongoose from 'mongoose';
import env from '../env';

const connectDb = async () => {
  try {
    await mongoose.connect(env.MONGO_CONNECTION_STRING as string, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
