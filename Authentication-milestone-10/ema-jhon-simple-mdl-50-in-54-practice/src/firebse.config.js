// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYArlwxyKAtp6FEZrXCRCtxQyY5UITb1A",
  authDomain: "ema-jhon-private-recap.firebaseapp.com",
  projectId: "ema-jhon-private-recap",
  storageBucket: "ema-jhon-private-recap.appspot.com",
  messagingSenderId: "750005586748",
  appId: "1:750005586748:web:bc4038e83f289b7413ac39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app