import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCoEISSo-O7gq_29cygpm2Dv2JftTOFtN4",
    authDomain: "farmify-be408.firebaseapp.com",
    databaseURL: "https://farmify-be408-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "farmify-be408",
    storageBucket: "farmify-be408.appspot.com",
    messagingSenderId: "589178002224",
    appId: "1:589178002224:web:8f570747efebe81980c6f5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export const storage = getStorage(app);

export { auth, db ,app};

