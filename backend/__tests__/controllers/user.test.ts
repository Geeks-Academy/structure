import app from '../../app';
import supertest from 'supertest';
import User from '../../models/user.model';

describe('User controller', () => {
  test('GET /api/users', async (done) => {
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
    done()
  })
  
})
