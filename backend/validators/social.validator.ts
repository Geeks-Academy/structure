import Joi from 'joi';

const schema = {
  post: Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
    active: Joi.boolean().required()
  }),
  put: Joi.object({
    name: Joi.string(),
    image: Joi.string(),
    active: Joi.boolean()
  }),
  id: Joi.object().keys({
    id: Joi.string().length(24)
  })
}


export default schema;
