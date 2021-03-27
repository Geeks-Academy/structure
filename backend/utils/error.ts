
class HttpError extends Error {
  code: number;
  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }

  toString() {
    return `Status: ${this.code}: ${this.message}`
  }
}

export default HttpError;
