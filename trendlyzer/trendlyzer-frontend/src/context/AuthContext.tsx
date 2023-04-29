import React, { createContext, useState } from 'react';
import { IAuth, IAuthContext } from '../models/ContextModel';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const authInstance = getAuth(app);

const defaultState: IAuthContext = {
  auth: { userId: '', isAuthenticated: false },
  handleAuth: () => {}
};

export const AuthContext = createContext<IAuthContext>(defaultState);

const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState({ userId: '', isAuthenticated: false });
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
  };

  return (
    <AuthContext.Provider value={{ auth, handleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
