import Joi from './Joi';

const schema = {
  post: Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
  }),
  put: Joi.object({
    name: Joi.string(),
    image: Joi.string(),
    active: Joi.boolean(),
  }),
  id: Joi.object().keys({
    id: Joi.string().objectId(),
  }),
};

export default schema;
