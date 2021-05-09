import Joi from './Joi';

const schema = {
  post: Joi.object({
    name: Joi.string().min(4).required(),
    title: Joi.string().required(),
    email: Joi.string().email().required(),
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
    email: Joi.string().email(),
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
