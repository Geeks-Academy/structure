import Joi from './Joi';

const schema = {
  post: Joi.object({
    name: Joi.string().min(4).required(),
    title: Joi.string().required(),
    openToWork: Joi.boolean(),
    manager: Joi.boolean(),
    boss: Joi.string().objectId(),
    image: Joi.string().allow(""),
    socials: Joi.array().items({
      link: Joi.string(),
      social: Joi.string().objectId()
    }).empty(),
    active: Joi.boolean()
  }),
  put: Joi.object({
    name: Joi.string().min(4),
    title: Joi.string(),
    openToWork: Joi.boolean(),
    manager: Joi.boolean(),
    boss: Joi.string().objectId(),
    image: Joi.string().allow(""),
    socials: Joi.array().items({
      link: Joi.string().required(),
      social: Joi.string().objectId()
    }).empty(),
    active: Joi.boolean()
  }),
  id: Joi.object().keys({
    id: Joi.string().objectId()
  })
}

export default schema


