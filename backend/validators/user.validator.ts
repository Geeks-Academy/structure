import Joi from './Joi';

const schema = {
  post: Joi.object({
    name: Joi.string().min(4).required(),
    title: Joi.string().required(),
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
    _id: Joi.string(),
    name: Joi.string().min(4),
    title: Joi.string(),
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
