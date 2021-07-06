import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const mongod = new MongoMemoryServer();

beforeAll(async () => {
  console.log = () => { };
  console.error = () => { };
});

beforeEach(async () => {
  const uri = await mongod.getUri();
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    poolSize: 10
  }
  await mongoose.connect(uri, options);
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
});

afterEach(async () => {
  jest.restoreAllMocks();
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
});
