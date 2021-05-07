import Joi from 'joi';

const schema = {
  post: Joi.object({
    name: Joi.string().min(4).required(),
    title: Joi.string().required(),
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
