import "dotenv";

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSAGING_SENDER_ID,
  // appId: process.env.APP_ID,
  // measurementId: process.env.MEASUREMENT_ID,

  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,

  // apiKey: "AIzaSyBabXQ31TFI5_1g1o1uHvsA8YKvBcxN1K8",
  // authDomain: "food-tracker-db186.firebaseapp.com",
  // projectId: "food-tracker-db186",
  // storageBucket: "food-tracker-db186.appspot.com",
  // messagingSenderId: "93923815787",
  // appId: "1:93923815787:web:03dc7a3fa09fbdc4cfdc2e",
  // measurementId:"G-QL7VFZZM37",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
