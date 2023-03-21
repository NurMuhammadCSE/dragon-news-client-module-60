// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6upYnGCCqTiqoQLA2KLM6XB5E4HylUa8",
  authDomain: "dragon-news-client-5ffb8.firebaseapp.com",
  projectId: "dragon-news-client-5ffb8",
  storageBucket: "dragon-news-client-5ffb8.appspot.com",
  messagingSenderId: "1001934419460",
  appId: "1:1001934419460:web:461b11a8a4f1a0f394e751"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;