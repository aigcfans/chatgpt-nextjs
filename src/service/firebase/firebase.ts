// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzASJmauKX9ui5pAqVx6c05rUz_050qDs",
  authDomain: "chatgpt-f5cd6.firebaseapp.com",
  projectId: "chatgpt-f5cd6",
  storageBucket: "chatgpt-f5cd6.appspot.com",
  messagingSenderId: "731084774820",
  appId: "1:731084774820:web:dc673d0f209ee011f73531",
  measurementId: "G-R8GZXCX420"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
