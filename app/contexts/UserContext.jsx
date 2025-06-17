import React, { createContext, useState, useEffect } from 'react';
import { auth } from "../../lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authChecked,setAuthChecked] = useState(false);

  useEffect(() => {
    try{
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user);
      });
      return unsubscribe;
    }catch(err){
      console.log(err)
    }finally{
      setAuthChecked(true)
    }
  }, []);

  async function login(email, password) {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Login error:', error);
    }
  }

  async function register(email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Register error:', error);
    }
  }

  async function logout() {
    try {
      await auth.signOut();
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
