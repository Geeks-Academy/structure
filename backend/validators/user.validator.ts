import { Request, Response, NextFunction } from 'express';
import { schema as socialSchema } from './social.validator';
import Joi from 'joi';
import StatusCode from '../utils/StatusCode';

const validateBody = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.validate(req.body);
    if (result.error) {
      return res.status(StatusCode.BAD_REQUEST).json(result.error.details);
    }
    next();
  }
}

const validateParameter = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.validate(req.params);
    if (result.error) {
      return res.status(StatusCode.BAD_REQUEST).json(result.error.details);
    }
    next();
  }
}

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

export {
  schema,
  validateBody,
  validateParameter,
}

