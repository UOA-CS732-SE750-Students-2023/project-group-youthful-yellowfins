import React, { createContext, useState } from 'react';
import { IAuthContext } from '../models/ContextModel';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB6e095KfXmT9siWND-3SvdjUsrD1TXGoI',
  authDomain: 'trendlyzer.firebaseapp.com',
  projectId: 'trendlyzer',
  storageBucket: 'trendlyzer.appspot.com',
  messagingSenderId: '151949771645',
  appId: '1:151949771645:web:4f05da17d198609f76c214',
  measurementId: 'G-9G1B2DLPPY'
};

const app = initializeApp(firebaseConfig);
const authInstance = getAuth(app);

const defaultState: IAuthContext = {
  auth: { username: '', password: '', isAuthenticated: false },
  handleAuth: (value: any) => {}
};

export const AuthContext = createContext<IAuthContext>(defaultState);

const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState({ username: '', password: '', isAuthenticated: false });

  const handleAuth = async ({username, password}: any) => {
    try {
      const result = await signInWithEmailAndPassword(authInstance, username, password);
      console.log('result', result);
      const { user } = result;
      if (user) {
        setAuth({ username: user.uid, password: '', isAuthenticated: true });
      }
      return true;
    } catch (error) {
      console.log('Error signing in with Google:', error);
    }
  };

  /*const [auth, setAuth] = useState({ userId: '', isAuthenticated: false });
  const googleProvider = new GoogleAuthProvider();

  const handleAuth = async () => {
    try {
      const result = await signInWithPopup(authInstance, googleProvider);
      const { user } = result;
      if (user) {
        setAuth({ userId: user.uid, isAuthenticated: true });
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };*/

  return (
    <AuthContext.Provider value={{ auth, handleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
