export class SweetError extends Error {
  public errorMessage: string;
  public errorCode?: string;
  public statusCode: number;

  constructor({
    errorMessage,
    statusCode,
    errorCode,
  }: {
    errorMessage: string;
    statusCode: number;
    errorCode?: string;
  }) {
    super(errorMessage);

    this.name = 'SweetError';
    this.errorMessage = errorMessage;
    this.statusCode = statusCode;
    this.errorCode = errorCode;
  }
}
