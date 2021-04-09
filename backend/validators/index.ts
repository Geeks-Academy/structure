import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import StatusCode from "../utils/StatusCode";

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

export {
  validateBody,
  validateParameter
}