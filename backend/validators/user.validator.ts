import socialSchema from './social.validator';
import Joi from 'joi';

const schema = {
  post: Joi.object({
    name: Joi.string().min(4).required(),
    title: Joi.string().required(),
    openToWork: Joi.boolean().default(true),
    manager: Joi.boolean().default(false),
    boss: Joi.string().default(null),
    image: Joi.string().allow(""),
    socials: Joi.array().items(socialSchema.post).allow().empty(),
    active: Joi.boolean().default(true)
  }),
  put: Joi.object({
    name: Joi.string().min(4),
    title: Joi.string(),
    openToWork: Joi.boolean().default(true),
    manager: Joi.boolean().default(false),
    boss: Joi.string().default(null),
    image: Joi.string().allow(""),
    active: Joi.boolean().default(true)
  }),
  id: Joi.object().keys({
    id: Joi.string().length(24)
  })
}

export default schema


