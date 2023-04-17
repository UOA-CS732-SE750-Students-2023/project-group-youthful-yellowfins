import React, { createContext, useState } from 'react';
import { IAuth, IAuthContext } from '../models/ContextModel';

const defaultState: IAuthContext = {
  auth: { userId: '', isAuthenticated: false },
  handleAuth: () => {},
};

export const AuthContext = createContext<IAuthContext>(defaultState);

const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState({ userId: '', isAuthenticated: false });

  const handleAuth = (value: IAuth) => setAuth(value);

  return <AuthContext.Provider value={{ auth, handleAuth }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
