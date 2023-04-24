// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY6L2x6SMZtjFBh15IaDwGjB1u0Edj65c",
  authDomain: "ema-john-firebase-auth-practic.firebaseapp.com",
  projectId: "ema-john-firebase-auth-practic",
  storageBucket: "ema-john-firebase-auth-practic.appspot.com",
  messagingSenderId: "407815904009",
  appId: "1:407815904009:web:8a2a34b385f4aa75c151d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;