// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE_ZnDmr0HnlmEWjUTZquc9HBwwa79IK0",
  authDomain: "stone-b9694.firebaseapp.com",
  projectId: "stone-b9694",
  storageBucket: "stone-b9694.appspot.com",
  messagingSenderId: "454228889501",
  appId: "1:454228889501:web:66bcf1baf76da94e96a974",
  measurementId: "G-0QZQDRTRQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app