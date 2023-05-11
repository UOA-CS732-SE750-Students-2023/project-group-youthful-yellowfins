/**
 * Author: Ankita Mohata, Ashish Agnihotri
 *
 * This is the context for authentication.
 * It has properties for checking the authentication of the user.
 * It handles the various ways to register, login and logout in and out of the application
 */

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

// Firebase configuration file to access firebase APIs
const firebaseConfig = {
  apiKey: 'AIzaSyB6e095KfXmT9siWND-3SvdjUsrD1TXGoI',
  authDomain: 'trendlyzer.firebaseapp.com',
  projectId: 'trendlyzer',
  storageBucket: 'trendlyzer.appspot.com',
  messagingSenderId: '151949771645',
  appId: '1:151949771645:web:4f05da17d198609f76c214',
  measurementId: 'G-9G1B2DLPPY',
};

// Initializing the firebase app
const app = initializeApp(firebaseConfig);
// Getting the authentication instance
const authInstance = getAuth(app);

// Default context state
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

// Creating the authentication context
export const AuthContext = createContext<IAuthContext>(defaultState);

/**
 * Creating the authentication context provider so that
 * the authentication state can be used throughout the application
 */
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

  // Method for registering the new user
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

  // Method for logging in the user
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

  // Method to authenticate the user via google
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

  // Method to log out the user
  const handlelogout = async () => {
    try {
      sessionStorage.removeItem('token');
      setAuth({
        userId: '',
        userName: '',
        email: '',
        password: '',
        authError: null,
        isAuthenticated: false,
        loading: false,
      });
      await signOut(authInstance);
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
