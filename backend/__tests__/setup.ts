import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const mongod = new MongoMemoryServer();

beforeAll(async () => {
  try {
    console.log = () => {};
    const uri = await mongod.getUri();
    const mongooseOpts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      poolSize: 10,
    };
    await mongoose.connect(uri, mongooseOpts);
  } catch (e) {
    console.info(e);
  }
});

beforeEach(async () => {
  try {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    }
  } catch (e) {
    console.info(e);
  }
});

afterAll(async () => {
  try {
    await mongoose.connection.close();
    await mongod.stop();
  } catch (e) {
    console.info(e);
  }
});

afterEach(async () => {
  try {
    jest.restoreAllMocks();
    console.info(mongoose.connection);
    await mongoose.connection.dropDatabase();
  } catch (e) {
    console.info(e);
  }
});
