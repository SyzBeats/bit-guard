export type AppState = {
  isAuthenticated: boolean;
  login: Function;
};

export type Action = {
  type: string;
  payLoad: any;
};
