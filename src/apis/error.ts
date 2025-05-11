export class SweetError extends Error {
  public errorMessage: string;
  public errorCode: number;

  constructor({
    errorMessage,
    statusCode,
  }: {
    errorMessage: string;
    statusCode: number;
  }) {
    super(errorMessage);

    this.name = 'SweetError';
    this.errorMessage = errorMessage;
    this.errorCode = statusCode;
  }
}
