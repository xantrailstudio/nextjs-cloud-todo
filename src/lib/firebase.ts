import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAj1TmllqDJ8CRb0HPtK0SoD3spqBj_Xkw",
  authDomain: "next-cloud-todo.firebaseapp.com",
  projectId: "next-cloud-todo",
  storageBucket: "next-cloud-todo.firebasestorage.app",
  messagingSenderId: "963018431620",
  appId: "1:963018431620:web:5b4ead1c30644115b576d1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);