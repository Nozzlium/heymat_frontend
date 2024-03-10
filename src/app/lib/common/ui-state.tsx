export enum UIStatus {
  IDLE,
  LOADING,
  SUCCESS,
  ERROR,
}

export default interface UIState {
  status: UIStatus;
  error?: Error;
}
