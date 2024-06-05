// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzbI6d4rYXxaxyKy_BFzN_MoyEuN2zMNo",
  authDomain: "hem-automotive.firebaseapp.com",
  projectId: "hem-automotive",
  storageBucket: "hem-automotive.appspot.com",
  messagingSenderId: "1061598542682",
  appId: "1:1061598542682:web:39a41762e4db3e88355163",
  measurementId: "G-WX4GK4VVNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);