// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJkva6PWthT9dyI4M2WKnsFcw5HtRPk9I",
  authDomain: "pass-authentic.firebaseapp.com",
  projectId: "pass-authentic",
  storageBucket: "pass-authentic.appspot.com",
  messagingSenderId: "806461066909",
  appId: "1:806461066909:web:34c016d4c285f025210e74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;