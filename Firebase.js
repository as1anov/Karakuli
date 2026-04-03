// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiNcwx9FDKEDx5SU4QfSva8R_gxDy2Pu0",
  authDomain: "karakuli.firebaseapp.com",
  projectId: "karakuli",
  storageBucket: "karakuli.firebasestorage.app",
  messagingSenderId: "808481687674",
  appId: "1:808481687674:web:0914275458153a38a253c3",
  measurementId: "G-WPRZ13Q21P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
