import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo-v0v6lq63E81CNoAWT-QUNSIbDB-_dI",
  authDomain: "filmyverse09.firebaseapp.com",
  projectId: "filmyverse09",
  storageBucket: "filmyverse09.appspot.com",
  messagingSenderId: "663363551158",
  appId: "1:663363551158:web:4512554b095a5935ac8b17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;