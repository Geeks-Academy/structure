import socialSchema from './social.validator';
import Joi from 'joi';

const schema = {
  post: Joi.object({
    name: Joi.string().min(4).required(),
    title: Joi.string().required(),
    image: Joi.string().allow(""),
    socials: Joi.array().items(socialSchema.post).allow().empty(),
  }),
  put: Joi.object({
    name: Joi.string().min(4),
    title: Joi.string(),
    image: Joi.string().allow(""),
  }),
  id: Joi.object().keys({
    id: Joi.string().length(24)
  })
}

export default schema


