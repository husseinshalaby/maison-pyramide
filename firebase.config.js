// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCz3LFK0AGQmrHOwfq_w_EKW1a1iM2jg6s",
  authDomain: "maison-pyramide.firebaseapp.com",
  projectId: "maison-pyramide",
  storageBucket: "maison-pyramide.appspot.com",
  messagingSenderId: "29081801033",
  appId: "1:29081801033:web:2fce1ed77e9d93c73aca98",
  measurementId: "G-8G6FLSN6SQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);