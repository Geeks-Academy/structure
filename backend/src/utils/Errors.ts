import StatusCode from './StatusCode'

export class GeneralError extends Error {
  constructor(message?: string) {
    super();
    this.message = message || '';
  }


  getCode(): number {
    if(this instanceof NoContent){
        return StatusCode.NO_CONTENT
    }
    if (this instanceof BadRequest) {
      return StatusCode.BAD_REQUEST;
    }
    if (this instanceof NotFound) {
      return StatusCode.NOT_FOUND;
    }
    if (this instanceof Forbidden){
        return StatusCode.FORBIDDEN;
    }
    return StatusCode.INTERNAL_SERVER_ERROR;
  }
}


export class BadRequest extends GeneralError { }
export class NotFound extends GeneralError { }
export class NoContent extends GeneralError { }
export class Forbidden extends GeneralError { }

