import app from '../../app';
import supertest from 'supertest';
import Social from '../../models/social.model';
import User from '../../models/user.model';


describe('Social Controller', () => {
  test('GET /api/socials', async (done) => {
    const social = await Social.create({
      name: 'Facebook',
      image: 'fb.png'
    })
    await supertest(app)
      .get('/api/socials')
      .expect(200)
      .then(({ body }) => {
        expect(Array.isArray(body)).toBeTruthy();
        expect(body.length).toEqual(1);
        expect(body[0]._id).toBe(social.id);
        expect(body[0].name).toBe(social.name);
      })
      .finally(() => done())
  });

  test('GET /api/socials get specific social ', async (done) => {
    const social = await Social.create({
      name: 'Facebook',
      image: 'fb.png'
    })
    await supertest(app)
      .get(`/api/socials/${social.id}`)
      .expect(200)
      .then(({ body }) => {
        expect(body._id).toBe(social.id);
        expect(body.name).toBe(social.name);
        expect(body.image).toBe(social.image);
      })
      .finally(() => done())
  })

  test('POST /api/socials', async (done) => {
    const social = {
      name: 'Facebook',
      image: 'fb.png'
    }
    await supertest(app)
      .post('/api/socials')
      .send(social)
      .expect(201)
      .then(({ body }) => {
        expect(body).toMatchObject({
          name: social.name,
          image: social.image,
          active: true
        })
      })
      .finally(() => done())
  })

  test('PUT /api/socials/deactivate/:id', async (done) => {
    const fbSocial = await Social.create({
      name: 'Facebook',
      image: 'fb.png',
      activate: true
    });

    const user = await User.create({
      name: 'John Doe',
      title: 'Software Developer',
      socials: [
        {
          link: 'https://fb.com',
          social: fbSocial.id
        }
      ]
    });

    await supertest(app)
      .patch(`/api/socials/deactivate/${fbSocial.id}`)
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveProperty('ok');
        expect(body).toHaveProperty('message');
      })

    await supertest(app)
      .get(`/api/socials/${fbSocial.id}`)
      .expect(200)
      .then(({ body }) => {
        expect(body.active).toBe(false)
      });

    await supertest(app)
      .get(`/api/users/${user.id}`)
      .expect(200)
      .then(({ body }) => {
        expect(body.socials.length).toEqual(0);
      })
      .finally(() => done())

  })
})

