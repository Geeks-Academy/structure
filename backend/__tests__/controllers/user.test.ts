import dotenv from 'dotenv';
dotenv.config();
import app from '../../app';
import mongoose from 'mongoose';
import supertest from 'supertest';
import User from '../../models/user.model';

beforeEach((done) => {
  mongoose.connect(process.env.MONGO_CONNECTION_STRING as string,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => done()
  )
})

afterEach((done) => {
  mongoose.connection.collection('users').deleteMany({})
    .then(() => done())
    .then(() => {
      mongoose.connection.db.dropDatabase(() => {
        mongoose.connection.close(() => done())
      });
    })

});


describe('User controller', () => {
  test('GET /api/users', async () => {
    const user = await User.create({
      name: 'John Doe',
      title: 'Software Developer',
    });
    await supertest(app).get('/api/users')
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body)).toBeTruthy()
        expect(response.body.length).toEqual(1)
        expect(response.body[0]._id).toBeTruthy();
        expect(response.body[0].title).toBe(user.title)
        expect(response.body[0].boss).toBeNull();
      })
  })
})
