// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { 
  initializeAuth, 
  getReactNativePersistence 
} from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyCz2p3CLdkspxL1yWd68zUCxKj9my8226o",
  authDomain: "todo-e5993.firebaseapp.com",
  projectId: "todo-e5993",
  storageBucket: "todo-e5993.appspot.com",
  messagingSenderId: "963636823221",
  appId: "1:963636823221:ios:7d68baddb4100e58faeafc",
};

// Initialize Firebase app (only once)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
