'use client'

import React, { useContext, useEffect, useState, ReactNode } from 'react';
import { auth, googleAuthProvider, githubAuthProvider } from '@/firebaseConfig'; // Assuming your Firebase config is in this file
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { User } from 'firebase/auth';

const AuthContext = React.createContext<undefined | any>(undefined);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const Auth = ({  children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user){
        setCurrentUser(user);
      } else {
        setCurrentUser(null)
      }
    });

    return unsubscribe;
  }, []);

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };

  const loginWithGithub = () => {
    return signInWithPopup(auth, githubAuthProvider);
  };

  const logout = () => {
    return signOut(auth);
  };

  const value = {
    currentUser,
    loginWithGoogle,
    loginWithGithub,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
