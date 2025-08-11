// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // <-- You missed this import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALzAz2o7bLY9ecdtz4KtpMVNzqy-Byhp0",
  authDomain: "mimi-notes.firebaseapp.com",
  databaseURL: "https://mimi-notes-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mimi-notes",
  storageBucket: "mimi-notes.firebasestorage.app",
  messagingSenderId: "252580139989",
  appId: "1:252580139989:web:fba80c2e41fe49b942635c",
  measurementId: "G-6Y8XW8J5M2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export { app };