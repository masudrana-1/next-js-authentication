// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDePzFrFDwqKYeF02o3AsJm6_NgIbk-2e8",
  authDomain: "nextauth-403005.firebaseapp.com",
  projectId: "nextauth-403005",
  storageBucket: "nextauth-403005.appspot.com",
  messagingSenderId: "576734490659",
  appId: "1:576734490659:web:b6f2245c7c744a69568196",
  measurementId: "G-TJQNWZD5KX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;