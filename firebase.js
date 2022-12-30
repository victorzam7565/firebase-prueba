// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA58oqal0ko8waye0A84R9_r4ep7l27Q54",
  authDomain: "redsocial-de3ac.firebaseapp.com",
  projectId: "redsocial-de3ac",
  storageBucket: "redsocial-de3ac.appspot.com",
  messagingSenderId: "253722840096",
  appId: "1:253722840096:web:a09a182cac9eeea8694045"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);  

export const auth = getAuth(app);