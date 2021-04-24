import app from '../../app';
import supertest from 'supertest';
import User from '../../models/user.model';
import Social from '../../models/social.model';

describe('User controller', () => {
  test('GET /api/users', async () => {
    const user = await User.create({
      name: 'John Doe',
      title: 'Software Developer',
    });
    await supertest(app)
      .get('/api/users')
      .expect(200)
      .then(({ body }) => {
        expect(Array.isArray(body)).toBeTruthy()
        expect(body.length).toEqual(1)
        expect(body[0]._id).toBeTruthy();
        expect(body[0].title).toBe(user.title)
        expect(body[0].boss).toBeNull();
      })
  })

  test('GET /api/users user with socials', async () => {
    const fbSocial = await Social.create({
      name: 'Facebook',
      image: 'fb.png'
    })
    await User.create({
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
      .get('/api/users')
      .expect(200)
      .then(({ body }) => {
        const { social } = body[0].socials[0];
        expect(body.length).toEqual(1)
        expect(social.active).toBeTruthy()
        expect(social).toHaveProperty('_id')
        expect(social._id).toBe(fbSocial.id)
        expect(social.name).toBe(fbSocial.name)
      })
  })

  test('POST /api/users', async () => {
    const user = {
      name: 'John Doe',
      title: 'Software Developer'
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
          active: true
        })
        expect(body).toHaveProperty('_id')
      })
  })

  test('POST /api/users if data is not valid', async () => {
    const user = {
      title: 'Software Developer'
    }
    await supertest(app)
      .post('/api/users')
      .send(user)
      .expect(400)
      .then(({ body }) => {
        expect(Array.isArray(body)).toBeTruthy()
        expect(body[0].context.key).toEqual('name')
      })

  })

  test('POST /api/users with socials', async () => {
    const fbSocial = await Social.create({
      name: 'Facebook',
      image: 'fb.png'
    })
    const user = {
      name: 'John Doe',
      title: 'Software Developer',
      socials: [
        {
          link: 'https://fb.com',
          social: fbSocial.id
        }
      ]
    }
    await supertest(app)
      .post('/api/users')
      .send(user)
      .expect(201)
      .then(({ body }) => {
        expect(body.socials.length).toEqual(1)
      })
  })

})
