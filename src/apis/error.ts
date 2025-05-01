export class SweetError extends Error {
  public errorMessage: string;
  public errorCode: number;

  constructor({message, statusCode}: {message: string; statusCode: number}) {
    super(message);

    this.name = 'SweetError';
    this.errorMessage = message;
    this.errorCode = statusCode;
  }
}
