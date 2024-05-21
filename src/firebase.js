// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-clone-30201.firebaseapp.com",
  projectId: "x-clone-30201",
  storageBucket: "x-clone-30201.appspot.com",
  messagingSenderId: "893087301636",
  appId: "1:893087301636:web:68b4a72f57183b8f6c3551",
  measurementId: "G-R83W8S6WFP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
