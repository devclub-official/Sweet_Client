export interface SweetResponse<T> {
  code: string;
  data: T;
  message: string;
  success: boolean;
}

export const enum ResponseCode {
  S0112 = 'S0112',
}
