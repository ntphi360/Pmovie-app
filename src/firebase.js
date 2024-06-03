import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBEm8m9qFr15xjJ7F58eiqzfgtkinOjV-g",
//   authDomain: "movie-db-2-3d4b6.firebaseapp.com",
//   projectId: "movie-db-2-3d4b6",
//   storageBucket: "movie-db-2-3d4b6.appspot.com",
//   messagingSenderId: "306212343060",
//   appId: "1:306212343060:web:4b6d3ec1913c5c93a94601"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCAaU7ETIVqM5xOPw8Zja4z5oJvIvA972c",
  authDomain: "pmovie-db-1.firebaseapp.com",
  projectId: "pmovie-db-1",
  storageBucket: "pmovie-db-1.appspot.com",
  messagingSenderId: "589958025599",
  appId: "1:589958025599:web:f4129b36a4c97ed7220a4a"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app) 

