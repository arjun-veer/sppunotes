import { initializeApp } from "firebase/app";
import { getAuth ,RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsgYyLsADi2H4cT7X2bJKppClHy-EV2lc",
  authDomain: "sppunotesapp.firebaseapp.com",
  projectId: "sppunotesapp",
  storageBucket: "sppunotesapp.firebasestorage.app",
  messagingSenderId: "735755459917",
  appId: "1:735755459917:web:f416044acdc2cc56216b04",
  measurementId: "G-BGNEYJTC2R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth, RecaptchaVerifier, signInWithPhoneNumber };