import app from '../../src/app';
import mongoose from 'mongoose';
import supertest from 'supertest';
import Social from '../../src/models/social.model';
import User from '../../src/models/user.model';

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

  test('GET /api/socials/:id get specific social ', async (done) => {
    const social = await Social.create({
      name: 'Facebook',
      image: 'fb.png',
    });
    await supertest(app)
      .get(`/api/socials/${social.id}`)
      .expect(200)
      .then(({ body }) => {
        expect(body._id).toBe(social.id);
        expect(body.name).toBe(social.name);
        expect(body.image).toBe(social.image);
      })
      .finally(() => done());
  });

  test('GET /api/socials/:id social not found', async (done) => {
    const mockedObjectId = mongoose.Types.ObjectId();
    await supertest(app)
      .get(`/api/socials/${mockedObjectId}`)
      .expect(404)
      .then(({ body }) => {
        expect(body).toHaveProperty('message');
      })
      .finally(() => done());
  });

  test('GET /api/socials/:id when :id parameter is invalid', async () => {
    await supertest(app)
      .get('/api/socials/1234test')
      .expect(400)
      .then(({ body }) => {
        expect(body[0]).toHaveProperty('message');
        expect(body[0].context.value).toBe('1234test');
        expect(body[0].context.key).toBe('id');
      });
  });

  test('GET /api/socials/:id should throw exception', async () => {
    const social = await Social.create({
      name: 'Facebook',
      image: 'fb.png',
    });
    jest.spyOn(Social, 'findOne').mockImplementation(() => {
      throw new Error('Error');
    });
    await supertest(app)
      .get(`/api/socials/${social.id}`)
      .expect(500)
      .then(({ body }) => {
        expect(body).toHaveProperty('message');
      });
  });

  test('POST /api/socials', async (done) => {
    const social = {
      name: 'Facebook',
      image: 'fb.png',
    };
    await supertest(app)
      .post('/api/socials')
      .send(social)
      .expect(201)
      .then(({ body }) => {
        expect(body).toMatchObject({
          name: social.name,
          image: social.image,
          active: true,
        });
      })
      .finally(() => done());
  });

  test('POST /api/socials/ should throw exception', async () => {
    const social = {
      name: 'Facebook',
      image: 'fb.png',
    };
    jest.spyOn(Social, 'create').mockImplementation(() => {
      throw new Error('Error');
    });
    await supertest(app)
      .post('/api/socials')
      .send(social)
      .expect(500)
      .then(({ body }) => {
        expect(body).toHaveProperty('message');
      });
  });

  test('PUT /api/socials/:id update social', async () => {
    const fbSocial = await Social.create({
      name: 'Facebook',
      image: 'fb.png',
    });
    const social = {
      image: 'facebook.png',
    };
    await supertest(app).put(`/api/socials/${fbSocial.id}`).send(social).expect(200);

    await supertest(app)
      .get(`/api/socials/${fbSocial.id}`)
      .then(({ body }) => {
        expect(body.image).toBe(social.image);
      });
  });

  test('PUT /api/socials/:id social not found', async () => {
    const mockedObjectId = mongoose.Types.ObjectId();
    await supertest(app).put(`/api/socials/${mockedObjectId}`).expect(404);
  });

  test('PUT /api/socials/:id when :id parameter is invalid', async () => {
    await supertest(app)
      .put('/api/socials/1234test')
      .expect(400)
      .then(({ body }) => {
        expect(body[0]).toHaveProperty('message');
        expect(body[0].context.value).toBe('1234test');
        expect(body[0].context.key).toBe('id');
      });
  });

  test('PUT /api/socials/:id params has incorrect form', async () => {
    const mockedObjectId = '12491dd';
    await supertest(app)
      .put(`/api/socials/${mockedObjectId}`)
      .expect(400)
      .then(({ body }) => {
        expect(Array.isArray(body)).toBeTruthy();
        expect(body[0].context.key).toEqual('id');
        expect(body[0].context.value).toEqual(mockedObjectId);
      });
  });

  test('PUT /api/socials/:id should throw exception', async () => {
    const fbSocial = await Social.create({
      name: 'Facebook',
      image: 'facebook-img.png',
    });
    const social = {
      name: 'Fb',
    };
    jest.spyOn(Social, 'findByIdAndUpdate').mockImplementation(() => {
      throw new Error('Error');
    });
    await supertest(app)
      .put(`/api/socials/${fbSocial.id}`)
      .send(social)
      .expect(500)
      .then(({ body }) => {
        expect(body).toHaveProperty('message');
      });
  });

  test('PUT /api/socials/deactivate/:id id has incorrect form', async () => {
    const mockedObjectId = '12491dd';
    await supertest(app)
      .put(`/api/socials/${mockedObjectId}`)
      .expect(400)
      .then(({ body }) => {
        expect(Array.isArray(body)).toBeTruthy();
        expect(body[0].context.key).toEqual('id');
        expect(body[0].context.value).toEqual(mockedObjectId);
      });
  });

  test('PUT /api/socials/:id social was not found', async () => {
    const mockedObjectId = mongoose.Types.ObjectId();
    await supertest(app).put(`/api/socials/deactivate/${mockedObjectId}`).expect(404);
  });

  test('PUT /api/socials/deactivate/:id when :id parameter is invalid', async () => {
    await supertest(app)
      .put('/api/socials/deactivate/1234test')
      .expect(400)
      .then(({ body }) => {
        expect(body[0]).toHaveProperty('message');
        expect(body[0].context.value).toBe('1234test');
        expect(body[0].context.key).toBe('id');
      });
  });

  test('PUT /api/socials/deactivate/:id', async (done) => {
    const fbSocial = await Social.create({
      name: 'Facebook',
      image: 'fb.png',
      activate: true,
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
      .put(`/api/socials/deactivate/${fbSocial.id}`)
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveProperty('ok');
        expect(body).toHaveProperty('message');
      });

    await supertest(app)
      .get(`/api/socials/${fbSocial.id}`)
      .expect(200)
      .then(({ body }) => {
        expect(body.active).toBe(false);
      });

    await supertest(app)
      .get(`/api/users/${user.id}`)
      .expect(200)
      .then(({ body }) => {
        expect(body.socials.length).toEqual(0);
      })
      .finally(() => done());
  });

  test('PUT /api/socials/deactivate/:id should throw exception', async () => {
    const fbSocial = await Social.create({
      name: 'Facebook',
      image: 'facebook-img.png',
      active: true,
    });
    const social = {
      name: 'Fb',
    };
    jest.spyOn(Social, 'findOneAndUpdate').mockImplementation(() => {
      throw new Error('Error');
    });
    await supertest(app)
      .put(`/api/socials/deactivate/${fbSocial.id}`)
      .send(social)
      .expect(500)
      .then(({ body }) => {
        expect(body).toHaveProperty('message');
      });
  });
});
