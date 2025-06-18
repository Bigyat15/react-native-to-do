// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Make sure this line exists
import AsyncStorage from "@react-native-async-storage/async-storage";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCz2p3CLdkspxL1yWd68zUCxKj9my8226o",
  authDomain: "todo-e5993.firebaseapp.com",
  projectId: "todo-e5993",
  storageBucket: "todo-e5993.appspot.com",
  messagingSenderId: "963636823221",
  appId: "1:963636823221:ios:7d68baddb4100e58faeafc",
};

// Initialize Firebase app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// ✅ Only initializeAuth once
let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (e) {
  auth = getAuth(app); // Fallback if already initialized
}

// ✅ Firestore initialization
const db = getFirestore(app);

export { auth, db };
