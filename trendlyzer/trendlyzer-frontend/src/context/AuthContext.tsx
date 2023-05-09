import React, { createContext, useEffect, useState } from 'react';
import { IAuthContext } from '../models/ContextModel';
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { IUser } from '../models/common';

const firebaseConfig = {
  apiKey: 'AIzaSyB6e095KfXmT9siWND-3SvdjUsrD1TXGoI',
  authDomain: 'trendlyzer.firebaseapp.com',
  projectId: 'trendlyzer',
  storageBucket: 'trendlyzer.appspot.com',
  messagingSenderId: '151949771645',
  appId: '1:151949771645:web:4f05da17d198609f76c214',
  measurementId: 'G-9G1B2DLPPY',
};

const app = initializeApp(firebaseConfig);
const authInstance = getAuth(app);

const defaultState: IAuthContext = {
  auth: {
    userId: '',
    userName: '',
    password: '',
    email: '',
    authError: null,
    isAuthenticated: false,
    loading: true,
  },
  handleGoogleAuth: () => {},
  handleLogInMethod: (value: any) => {},
  handleRegisterMethod: (value: any) => {},
  handlelogout: () => {},
};

export const AuthContext = createContext<IAuthContext>(defaultState);

const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState(defaultState.auth);
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    authInstance.onAuthStateChanged(async (user: any) => {
      if (user) {
        const { uid, displayName, email, accessToken } = user || '';
        sessionStorage.setItem('token', accessToken);
        setAuth({
          userId: uid,
          userName: displayName,
          password: '',
          email,
          authError: null,
          isAuthenticated: !!accessToken,
          loading: false,
        });
      } else {
        setAuth({
          userId: '',
          userName: '',
          password: '',
          email: '',
          authError: null,
          isAuthenticated: false,
          loading: false,
        });
      }
    });
  }, []);

  const handleRegisterMethod = async ({ firstName, lastName, email, password }: IUser) => {
    try {
      setAuth({ ...auth, loading: true });
      const result = await createUserWithEmailAndPassword(authInstance, email, password);
      const { user } = result;
      if (user) {
        sessionStorage.setItem('token', await user.getIdToken());
        await updateProfile(user, { displayName: `${firstName} ${lastName}` });
        setAuth({
          userId: user.uid,
          userName: `${firstName} ${lastName}`,
          email: user.email,
          password: '',
          authError: null,
          isAuthenticated: true,
          loading: false,
        });
      }
    } catch (error: any) {
      setAuth({
        ...auth,
        authError: error.message,
        isAuthenticated: false,
      });
    }
  };

  const handleLogInMethod = async ({ email, password }: any) => {
    try {
      setAuth({ ...auth, loading: true });
      const result = await signInWithEmailAndPassword(authInstance, email, password);
      const { user } = result;
      if (user) {
        sessionStorage.setItem('token', await user.getIdToken());
        setAuth({
          ...auth,
          userId: user.uid,
          email: user.email,
          authError: null,
          isAuthenticated: true,
          loading: false,
        });
      }
      return { message: '' };
    } catch (error: any) {
      setAuth({
        ...auth,
        authError: error.message,
        isAuthenticated: false,
      });
      return { message: error.message };
    }
  };

  const handleGoogleAuth = async () => {
    try {
      const result = await signInWithPopup(authInstance, googleProvider);
      const { user } = result;
      if (user) {
        sessionStorage.setItem('token', await user.getIdToken());
        setAuth({
          ...auth,
          userId: user.uid,
          userName: user.displayName,
          email: user.email,
          authError: null,
          isAuthenticated: true,
          loading: false,
        });
      }
    } catch (error: any) {
      setAuth({
        ...auth,
        authError: error.message,
        isAuthenticated: false,
      });
    }
  };

  const handlelogout = async () => {
    try {
      sessionStorage.removeItem('token');
      await signOut(authInstance);
      setAuth({
        userId: '',
        userName: '',
        email: '',
        password: '',
        authError: null,
        isAuthenticated: false,
        loading: false,
      });
    } catch (error: any) {
      setAuth({
        ...auth,
        authError: error.message,
        isAuthenticated: false,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{ auth, handleGoogleAuth, handleLogInMethod, handleRegisterMethod, handlelogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
