import { HttpStatusCode } from "src/utils/StatusCode";

class BaseError extends Error {
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

 // https://www.toptal.com/nodejs/node-js-error-handling