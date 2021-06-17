import { logger } from './Logger';
import { Request, Errback } from 'express';
import { IBug } from 'src/models/bug.model';
import { bugService, IBugService } from '../services/bug.service';

class ErrorHandler {
   private bugService: IBugService;
 
  constructor(bugService: IBugService) {
    this.bugService = bugService;
  }

  public handleError = async (err: Error, req: Request): Promise<void> => {
    logger.error( 'Error message from the centralized error-handling component',
    err);
    // save to db
    const bug: IBug = {
      errorMsg: err.message,
      stackTrace: err.stack, 
      file: req.body ?? req.params, 
      method: 'global'
    }
    await this.bugService.createNewBug(bug)
  }

  // For future uses
  // public isTrustedError = (err: Error) => {
  //   if (err instanceof BaseError) {
  //     return err.isOperational;
  //   }
  //   return false;
  // }
}

export const errorHandler = new ErrorHandler(bugService);