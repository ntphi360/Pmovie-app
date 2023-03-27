import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEm8m9qFr15xjJ7F58eiqzfgtkinOjV-g",
  authDomain: "movie-db-2-3d4b6.firebaseapp.com",
  projectId: "movie-db-2-3d4b6",
  storageBucket: "movie-db-2-3d4b6.appspot.com",
  messagingSenderId: "306212343060",
  appId: "1:306212343060:web:4b6d3ec1913c5c93a94601"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app) 

