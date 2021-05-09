import Joi from './Joi';
import User from '../models/user.model';
import { ValidationError } from 'joi';

const schema = {
  post: Joi.object({
    name: Joi.string().min(4).required(),
    title: Joi.string().required(),
    email: Joi.string()
      .email()
      .external(async (email: string) => {
        const user = await User.findOne({ email });
        if (user) {
          throw new ValidationError(
            'This email already exists',
            [
              {
                message: 'email already exists',
                context: {
                  label: 'email',
                  key: 'email',
                },
              },
            ],
            ''
          );
        }
      })
      .required(),
    openToWork: Joi.boolean(),
    manager: Joi.boolean(),
    boss: Joi.string().objectId().allow(null),
    image: Joi.string().allow(''),
    socials: Joi.array()
      .items({
        link: Joi.string().required(),
        social: Joi.string().objectId().required(),
      })
      .empty(),
    active: Joi.boolean(),
  }),
  put: Joi.object({
    name: Joi.string().min(4),
    title: Joi.string(),
    email: Joi.string()
      .email()
      .external(async (email: string) => {
        const user = await User.findOne({ email });
        if (user) {
          throw new ValidationError('This email already exists', '', '');
        }
      }),
    openToWork: Joi.boolean(),
    manager: Joi.boolean(),
    boss: Joi.string().objectId().allow(null),
    image: Joi.string().allow(''),
    socials: Joi.array()
      .items({
        link: Joi.string().required(),
        social: Joi.string().objectId().required(),
      })
      .empty(),
    active: Joi.boolean(),
  }),
  id: Joi.object().keys({
    id: Joi.string().objectId(),
  }),
};

export default schema;
