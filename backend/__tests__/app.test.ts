import app from '../app';
import supertest from 'supertest';

describe('app.ts file', () => {
  test('health check', async () => {
    await supertest(app).get('/health-check').expect(200);
  });

  test('not found ', async () => {
    await supertest(app).get('/not-found').expect(404);
  });
});
