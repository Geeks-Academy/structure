import app from '../../src/app';
import supertest from 'supertest';

describe('Social Controller', async () => {
  test('GET /api/socials empty socials', async () => {
    await supertest(app).get('/api/socials').expect(204);
  });
});
