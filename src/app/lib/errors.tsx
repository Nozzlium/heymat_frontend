export interface HeymatError {
  code: number;
  status: string;
  error: {
    message: string;
    detail: string;
  };
}
