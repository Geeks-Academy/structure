import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const mongod = new MongoMemoryServer();

beforeAll(async () => {
  console.log = () => {};
});

beforeEach(async () => {
  const uri = await mongod.getUri();
  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    poolSize: 10,
  };
  await mongoose.connect(uri, mongooseOpts);

  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();

  await mongod.stop();
});

afterEach(async () => {
  jest.restoreAllMocks();
  await mongoose.connection.close();
});
