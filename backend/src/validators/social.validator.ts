import Joi from 'joi';

const schema = {
  post: Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
  }),
  put: Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
    active: Joi.boolean().required(),
  }),
  id: Joi.object().keys({
    id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
  }),
};

export default schema;
