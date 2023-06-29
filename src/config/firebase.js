import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBabXQ31TFI5_1g1o1uHvsA8YKvBcxN1K8",
  authDomain: "food-tracker-db186.firebaseapp.com",
  projectId: "food-tracker-db186",
  storageBucket: "food-tracker-db186.appspot.com",
  messagingSenderId: "93923815787",
  appId: "1:93923815787:web:03dc7a3fa09fbdc4cfdc2e",
  measurementId: "G-QL7VFZZM37"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
