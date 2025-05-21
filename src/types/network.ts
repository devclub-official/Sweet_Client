export interface SweetResponse<T> {
  code: string;
  data: T;
  message: string;
  success: boolean;
}
