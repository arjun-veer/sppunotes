// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsgYyLsADi2H4cT7X2bJKppClHy-EV2lc",
  authDomain: "sppunotesapp.firebaseapp.com",
  projectId: "sppunotesapp",
  storageBucket: "sppunotesapp.firebasestorage.app",
  messagingSenderId: "735755459917",
  appId: "1:735755459917:web:f416044acdc2cc56216b04",
  measurementId: "G-BGNEYJTC2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);