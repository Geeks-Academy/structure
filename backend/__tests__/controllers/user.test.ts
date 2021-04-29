import app from '../../app';
import supertest from 'supertest';
import User from '../../models/user.model';
import Social from '../../models/social.model';

describe('User controller', () => {
  test('GET /api/users', async (done) => {
    const user = await User.create({
      name: 'John Doe',
      title: 'Software Developer',
    });
    await supertest(app)
      .get('/api/users')
      .expect(200)
      .then(({ body }) => {
        expect(Array.isArray(body)).toBeTruthy();
        expect(body.length).toEqual(1);
        expect(body[0]._id).toBe(user.id);
        expect(body[0].title).toBe(user.title);
        expect(body[0].boss).toBeNull();
      })
      .finally(() => done());
  });

  test('GET /api/users user with socials', async (done) => {
    const fbSocial = await Social.create({
      name: 'Facebook',
      image: 'fb.png',
    });
    await User.create({
      name: 'John Doe',
      title: 'Software Developer',
      socials: [
        {
          link: 'https://fb.com',
          social: fbSocial.id,
        },
      ],
    });
    await supertest(app)
      .get('/api/users')
      .expect(200)
      .then(({ body }) => {
        const { social } = body[0].socials[0];
        expect(body.length).toEqual(1);
        expect(social.active).toBeTruthy();
        expect(social).toHaveProperty('_id');
        expect(social._id).toBe(fbSocial.id);
        expect(social.name).toBe(fbSocial.name);
      })
      .finally(() => done());
  });

  test('GET /api/users/:id get specific user', async (done) => {
    const user = await User.create({
      name: 'John Doe',
      title: 'Software Developer',
    });
    await supertest(app)
      .get(`/api/users/${user.id}`)
      .expect(200)
      .then(({ body }) => {
        expect(body._id).toBe(user.id);
        expect(body.name).toBe('John Doe');
      })
      .finally(() => done());
  });

  test('GET /api/users/:id should return 404', async (done) => {
    const user = await User.create({
      name: 'John Doe',
      title: 'Software Developer',
    });
    await User.deleteMany({});
    await supertest(app)
      .get(`/api/users/${user.id}`)
      .expect(404)
      .then(() => {})
      .finally(() => done());
  });

  test('POST /api/users', async (done) => {
    const user = {
      name: 'John Doe',
      title: 'Software Developer',
    };
    await supertest(app)
      .post('/api/users')
      .send(user)
      .expect(201)
      .then(({ body }) => {
        expect(body).toMatchObject({
          name: user.name,
          title: user.title,
          openToWork: true,
          manager: false,
          boss: null,
          image: '',
          socials: [],
          active: true,
        });
        expect(body).toHaveProperty('_id');
      })
      .finally(() => done());
  });

  test('POST /api/users if data is not valid', async (done) => {
    const user = {
      title: 'Software Developer',
    };
    await supertest(app)
      .post('/api/users')
      .send(user)
      .expect(400)
      .then(({ body }) => {
        expect(Array.isArray(body)).toBeTruthy();
        expect(body[0].context.key).toEqual('name');
      })
      .finally(() => done());
  });

  test('POST /api/users with socials', async (done) => {
    const fbSocial = await Social.create({
      name: 'Facebook',
      image: 'fb.png',
    });
    const user = {
      name: 'John Doe',
      title: 'Software Developer',
      socials: [
        {
          link: 'https://fb.com',
          social: fbSocial.id,
        },
      ],
    };
    await supertest(app)
      .post('/api/users')
      .send(user)
      .expect(201)
      .then(({ body }) => {
        expect(body.socials.length).toEqual(1);
      })
      .finally(() => done());
  });

  test('PUT /api/users/:id', async (done) => {
    const fbSocial = await Social.create({
      name: 'Facebook',
      image: 'fb.png',
    });
    const user = await User.create({
      name: 'John Doe',
      title: 'Software Developer',
      socials: [
        {
          link: 'https://fb.com',
          social: fbSocial.id,
        },
      ],
    });
    await supertest(app)
      .put(`/api/users/${user.id}`)
      .send({ name: 'Testing User' })
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveProperty('message');
      });
    await supertest(app)
      .get(`/api/users/${user.id}`)
      .then(({ body }) => {
        expect(body.name).toBe('Testing User');
      })
      .finally(() => done());
  });
});
