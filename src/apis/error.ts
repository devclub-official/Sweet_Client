export class SweetError extends Error {
  public errorMessage: string;
  public errorCode: number;

  constructor({
    message,
    error,
    statusCode,
  }: {
    message: string;
    error: string;
    statusCode: number;
  }) {
    super(message);
    this.errorMessage = message;
    this.errorCode = statusCode;
  }
}
