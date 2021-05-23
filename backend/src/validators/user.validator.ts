import Joi, { ValidationError } from 'joi';
import User from '../models/user.model';

const schema = {
  post: Joi.object({
    name: Joi.string().min(4).required(),
    title: Joi.string().required(),
    email: Joi.string().email().required(),
    openToWork: Joi.boolean(),
    manager: Joi.boolean(),
    boss: Joi.string()
      .regex(/^([0-9a-fA-F]{24})?$/)
      .allow(null),
    image: Joi.string().allow(''),
    socials: Joi.array()
      .items({
        link: Joi.string().required(),
        social: Joi.string()
          .regex(/^[0-9a-fA-F]{24}$/)
          .required(),
      })
      .empty(),
    active: Joi.boolean(),
  }),
  put: Joi.object({
    name: Joi.string().min(4),
    title: Joi.string(),
    email: Joi.string().email(),
    openToWork: Joi.boolean(),
    manager: Joi.boolean(),
    boss: Joi.string()
      .regex(/^([0-9a-fA-F]{24})?$/)
      .allow(null),
    image: Joi.string().allow(''),
    socials: Joi.array()
      .items({
        link: Joi.string().required(),
        social: Joi.string()
          .regex(/^[0-9a-fA-F]{24}$/)
          .required(),
      })
      .empty(),
    active: Joi.boolean(),
  }),
  id: Joi.object().keys({
    id: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
  }),
};

export default schema;
