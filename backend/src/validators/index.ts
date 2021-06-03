import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { BadRequest } from '../utils/Errors'
import {deleteQuotes} from '../utils'

const validateBody = (schema: Joi.ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      const message = deleteQuotes(error.details[0].message)
      next(new BadRequest(message))
    }
  };
};

const validateParameter = (schema: Joi.ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const result = await schema.validate(req.params);
    if (result.error) {
      const message = deleteQuotes(result.error.details[0].message)
      next(new BadRequest(message))
    }
    next();
  };
};

export { validateBody, validateParameter };
