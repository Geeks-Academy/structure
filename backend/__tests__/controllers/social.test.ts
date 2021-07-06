import app from '../../src/app';
import supertest from 'supertest';
import Social from '../../src/models/social.model';

describe('Social Controller', () => {
  test('GET /api/socials empty socials', async () => {
    await supertest(app).get('/api/socials').expect(204);
  });

  test('GET /api/socials should throw exception', async () => {
    jest.spyOn(Social, 'find').mockImplementation(() => {
      throw new Error('Error');
    });
    await supertest(app)
      .get('/api/socials')
      .expect(500)
      .then(({ body }) => {
        expect(body).toHaveProperty('message');
      });
  });

  test('GET /api/socials', async (done) => {
    const social = await Social.create({
      name: 'Facebook',
      image: 'fb.png',
    });
    await supertest(app)
      .get('/api/socials')
      .expect(200)
      .then(({ body }) => {
        expect(Array.isArray(body)).toBeTruthy();
        expect(body.length).toEqual(1);
        expect(body[0]._id).toBe(social.id);
        expect(body[0].name).toBe(social.name);
      })
      .finally(() => done());
  });

  test('GET /api/socials/active empty socials', async () => {
    await supertest(app).get('/api/socials/active').expect(204);
  });
});
