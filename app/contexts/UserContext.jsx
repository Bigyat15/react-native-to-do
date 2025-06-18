import React, { createContext, useState, useEffect } from 'react';
import { auth } from "../../lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { useRouter } from 'expo-router';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authChecked,setAuthChecked] = useState(false);
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setAuthChecked(true); 
    });
    return unsubscribe;
  }, []);
  

  async function login(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/(dashboard)/Profile")
    } catch (error) {
      console.error('Login error:', error);
    }
  }

  async function register(email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // router.push("/(auth)/login")
    } catch (error) {
      console.error('Register error:', error);
    }
  }

  async function logout() {
    try {
      await auth.signOut();
      router.replace("/")
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  return (
    <UserContext.Provider value={{ user, login, register, logout,authChecked }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
