import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import StatusCode from '../utils/StatusCode';

const validateBody = (schema: Joi.ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      return res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
    }
  };
};

const validateParameter = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction): Response | undefined => {
    const result = schema.validate(req.params);
    if (result.error) {
      return res.status(StatusCode.BAD_REQUEST).json(result.error.details);
    }
    next();
  };
};

export { validateBody, validateParameter };
