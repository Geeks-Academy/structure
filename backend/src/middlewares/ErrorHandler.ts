import logger from './logger';
import { Request, Response } from 'express';

class ErrorHandler {
  public handleError = async (err: Error, req: Request): Promise<void> => {
    logger()
  }

  public isTrustedError = (err: Error) => {
    if (err instanceof BaseError) {
      return err.
    }
  }
}