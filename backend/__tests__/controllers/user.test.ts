import app from '../../app';
import supertest from 'supertest';
import mongoose from 'mongoose';
import User from '../../models/user.model';
import Social from '../../models/social.model';

describe('User controller', () => {
  test('GET /api/users', async (done) => {
    const user = await User.create({
      name: 'John Doe',
      email: 'jdoe@test.com',
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

  test('GET /api/users users are empty', async () => {
    await supertest(app).get('/api/users').expect(204);
  });

  test('GET /api/users user with socials', async (done) => {
    const fbSocial = await Social.create({
      name: 'Facebook',
      image: 'fb.png',
    });
    await User.create({
      name: 'John Doe',
      title: 'Software Developer',
      email: 'jdoe@test.com',
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

  test('GET /api/users should throw exception', async () => {
    jest.spyOn(User, 'find').mockImplementation(() => {
      throw new Error('Error');
    });
    await supertest(app)
      .get('/api/users')
      .expect(500)
      .then(({ body }) => {
        expect(body).toHaveProperty('message');
      });
  });

  test('GET /api/users/:id get specific user', async (done) => {
    const user = await User.create({
      name: 'John Doe',
      email: 'jdoe@test.com',
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
    const mockedObjectId = mongoose.Types.ObjectId();
    await supertest(app)
      .get(`/api/users/${mockedObjectId}`)
      .expect(404)
      .then(({ body }) => {
        expect(body).toHaveProperty('message');
      })
      .finally(() => done());
  });

  test('GET /api/users/:id should throw exception', async () => {
    const user = await User.create({
      name: 'John Doe',
      email: 'jdoe@test.com',
      title: 'Software Developer',
    });
    jest.spyOn(User, 'findOne').mockImplementation(() => {
      throw new Error('Error');
    });
    await supertest(app)
      .get(`/api/users/${user.id}`)
      .expect(500)
      .then(({ body }) => {
        expect(body).toHaveProperty('message');
      });
  });

  test('POST /api/users', async (done) => {
    const user = {
      name: 'John Doe',
      title: 'Software Developer',
      email: 'jdoe@test.com',
    };
    await supertest(app)
      .post('/api/users')
      .send(user)
      .expect(201)
      .then(({ body }) => {
        expect(body).toMatchObject({
          name: user.name,
          title: user.title,
          email: user.email,
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

  test('POST /api/users if data is not valid', async () => {
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
      });
  });

  test('POST /api/users if email does not exists', async () => {
    const user = {
      name: 'John Doe',
      title: 'Software Developer',
    };
    await supertest(app)
      .post('/api/users')
      .send(user)
      .expect(400)
      .then(({ body }) => {
        expect(Array.isArray(body)).toBeTruthy();
        expect(body[0].context.key).toEqual('email');
      });
  });

  test('POST /api/users with socials', async (done) => {
    const fbSocial = await Social.create({
      name: 'Facebook',
      image: 'fb.png',
    });
    const user = {
      name: 'John Doe',
      title: 'Software Developer',
      email: 'jdoe@test.com',
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

  test('POST /api/users should throw error because of duplicated email', async () => {
    await User.create({
      name: 'John Doe',
      title: 'Frontend Developer',
      email: 'jdoe@test.com',
    });
    const user2 = {
      name: 'John Doe',
      title: 'Software Developer',
      email: 'jdoe@test.com',
    };

    await supertest(app)
      .post('/api/users')
      .send(user2)
      .expect(400)
      .then(({ body }) => {
        expect(Array.isArray(body)).toBeTruthy();
        expect(body[0].context.key).toBe('email');
      });
  });

  test('POST /api/users should throw exception', async () => {
    const user = {
      name: 'John Doe',
      title: 'Software Developer',
      email: 'jdoe@test.com',
    };
    jest.spyOn(User, 'create').mockImplementation(() => {
      throw new Error('Error');
    });
    await supertest(app)
      .post('/api/users')
      .send(user)
      .expect(500)
      .then(({ body }) => {
        expect(body).toHaveProperty('message');
      });
  });

  test('PUT /api/users/:id', async (done) => {
    const fbSocial = await Social.create({
      name: 'Facebook',
      image: 'fb.png',
    });
    const user = await User.create({
      name: 'John Doe',
      title: 'Software Developer',
      email: 'jdoe@test.com',
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

  test('PUT /api/users/:id should throw exception', async () => {
    const user = await User.create({
      name: 'John Doe',
      title: 'Software Developer',
      email: 'jdoe@test.com',
    });
    jest.spyOn(User, 'findOneAndUpdate').mockImplementation(() => {
      throw new Error('Error');
    });
    await supertest(app)
      .put(`/api/users/${user.id}`)
      .send({ name: 'Testing User' })
      .expect(500)
      .then(({ body }) => {
        expect(body).toHaveProperty('message');
      });
  });

  test('PUT /api/users/:id should throw an error because of duplicated email', async () => {
    const user = await User.create({
      name: 'John Doe',
      title: 'Frontend Developer',
      email: 'jdoe@test.com',
    });
    const user2 = {
      name: 'John Doe',
      title: 'Software Developer',
      email: 'jdoe@test.com',
    };

    await supertest(app)
      .put(`/api/users/${user.id}`)
      .send(user2)
      .expect(400)
      .then(({ body }) => {
        expect(Array.isArray(body)).toBeTruthy();
        expect(body[0].context.key).toBe('email');
      });
  });

  test('PUT /api/users/:id user not found', async () => {
    const mockedObjectId = mongoose.Types.ObjectId();
    await supertest(app)
      .put(`/api/users/${mockedObjectId}`)
      .expect(404)
      .then(({ body }) => {
        expect(body).toHaveProperty('message');
      });
  });

  test('PUT /api/users/:id id param has incorrect form', async () => {
    const mockedObjectId = '12491dd';
    await supertest(app)
      .put(`/api/users/${mockedObjectId}`)
      .expect(400)
      .then(({ body }) => {
        expect(Array.isArray(body)).toBeTruthy();
        expect(body[0].context.key).toEqual('id');
        expect(body[0].context.value).toEqual(mockedObjectId);
      });
  });

  test('PUT /api/users/deactivate/:id id param has incorrect form', async () => {
    const mockedObjectId = '12491dd';
    await supertest(app)
      .put(`/api/users/deactivate/${mockedObjectId}`)
      .expect(400)
      .then(({ body }) => {
        expect(Array.isArray(body)).toBeTruthy();
        expect(body[0].context.key).toEqual('id');
        expect(body[0].context.value).toEqual(mockedObjectId);
      });
  });

  test('PUT /api/users/deactivate/:id user not found', async () => {
    const mockedObjectId = mongoose.Types.ObjectId();
    await supertest(app)
      .put(`/api/users/deactivate/${mockedObjectId}`)
      .expect(404)
      .then(({ body }) => {
        expect(body).toHaveProperty('message');
      });
  });

  test('PUT /api/users/deactivate/:id user is found and updated', async () => {
    const user = await User.create({
      name: 'John Doe',
      title: 'Software Developer',
      email: 'jdoe@test.com',
      active: true,
    });

    await supertest(app).put(`/api/users/deactivate/${user.id}`).expect(200);

    await supertest(app)
      .get(`/api/users/${user.id}`)
      .then(({ body }) => {
        expect(body.active).toBeFalsy();
        expect(body.openToWork).toBeFalsy();
      });
  });

  test('PUT /api/users/deactivate/:id should throw exception', async () => {
    const mockedObjectId = mongoose.Types.ObjectId();
    jest.spyOn(User, 'findOneAndUpdate').mockImplementation(() => {
      throw new Error('Error');
    });
    await supertest(app)
      .put(`/api/users/deactivate/${mockedObjectId}`)
      .expect(500)
      .then(({ body }) => {
        expect(body).toHaveProperty('message');
      });
  });

  test('DELETE /api/users/:id id param has incorrect format', async () => {
    const mockedObjectId = '12491dd';
    await supertest(app)
      .delete(`/api/users/${mockedObjectId}`)
      .expect(400)
      .then(({ body }) => {
        expect(Array.isArray(body)).toBeTruthy();
        expect(body[0].context.key).toEqual('id');
        expect(body[0].context.value).toEqual(mockedObjectId);
      });
  });

  test('DELETE /api/users/:id user not found', async () => {
    const mockedObjectId = mongoose.Types.ObjectId();
    await supertest(app)
      .delete(`/api/users/${mockedObjectId}`)
      .expect(404)
      .then(({ body }) => {
        expect(body).toHaveProperty('message');
      });
  });

  test('DELETE /api/users/:id user found and updated', async () => {
    const boss = await User.create({
      name: 'Boss',
      title: 'Senior Developer',
      email: 'jdoe@test.com',
    });
    const user = await User.create({
      name: 'John Doe',
      title: 'Software Developer',
      email: 'jdoe2@test.com',
      active: true,
      boss: boss.id,
    });

    await supertest(app)
      .delete(`/api/users/${user.id}`)
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveProperty('message');
      });
  });

  test('DELETE /api/users/:id the user is a boss', async () => {
    const boss = await User.create({
      name: 'Boss',
      title: 'Senior Developer',
      email: 'jdoe@test.com',
    });

    await supertest(app)
      .delete(`/api/users/${boss.id}`)
      .expect(403)
      .then(({ body }) => {
        expect(body).toHaveProperty('message');
      });
  });

  test('DELETE /api/users/:id should throw exception', async () => {
    const user = await User.create({
      name: 'John Doe',
      title: 'Software Developer',
      active: true,
      email: 'jdoe@test.com',
    });
    jest.spyOn(User, 'findOne').mockImplementation(() => {
      throw new Error('Error');
    });

    await supertest(app)
      .delete(`/api/users/${user.id}`)
      .expect(500)
      .then(({ body }) => {
        expect(body).toHaveProperty('message');
      });
  });
});
