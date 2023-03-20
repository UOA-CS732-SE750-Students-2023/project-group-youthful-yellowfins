export interface IAuth {
  userId: string,
  isAuthenticated: boolean;
}

export interface IAuthContext {
  auth: IAuth;
  handleAuth: (value: IAuth) => void;
}