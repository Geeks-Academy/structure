import { HttpStatusCode } from "src/utils/StatusCode";

export class BaseError extends Error {
  public readonly name: string;
  public readonly httpCode: HttpStatusCode;
  public readonly isOperational: boolean;
  
  constructor(name: string, httpCode: HttpStatusCode, description: string, isOperational: boolean) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);
  
    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;
  
    Error.captureStackTrace(this);
  }
 }

//  class APIError extends BaseError {
//   constructor(
//     name: string, 
//     httpCode = HttpStatusCode.INTERNAL_SERVER_ERROR, 
//     isOperational = true, 
//     description = 'internal server error') {
//     super(name, httpCode, isOperational, description);
//   }
//  }

 // https://www.toptal.com/nodejs/node-js-error-handling