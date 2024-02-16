'use client'

import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState, ReactNode } from 'react';
import { auth, googleAuthProvider, githubAuthProvider } from '@/firebaseConfig';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { User } from 'firebase/auth';

const AuthContext = React.createContext<undefined | any>(undefined);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const Auth = ({ children }: { children: ReactNode }) => {
  const [currentUser, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        router.push('/portal');
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [setUser, router]);

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