
import { Request, Response,  NextFunction } from 'express';
import StatusCode from '../utils/StatusCode';
import HttpException from '../utils/HttpException';
import { GeneralError } from '../utils/Errors';
import { ErrorResponseI } from '../types'


const handleErrors = (err: HttpException, _req: Request, res: Response, _next: NextFunction): Response<ErrorResponseI> => {
  if (err instanceof GeneralError) {
    return res.status(err.getCode()).json({
      status: err.getCode(),
      message: err.message
    });
  }

  return res.status(500).json({
    status: StatusCode.INTERNAL_SERVER_ERROR,
    message: err.message
  });
}

export default handleErrors;


