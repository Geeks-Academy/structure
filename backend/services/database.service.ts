import mongoose from 'mongoose';

const MONGO_CONNECTION_STRING = (process.env.NODE_ENV === 'production' ?
  process.env.MONGO_CONNECTION_STRING : process.env.DEV_MONGO_CONNECTION_STRING) as string;

const connectDb = () => {
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("mongodb connected ..."))
  .catch(e => console.log(`failed to connect mongodb: ${e}`));
}

export default connectDb
