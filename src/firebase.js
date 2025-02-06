// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA23Vgi6bxTMX_i2FhvveCkbHt32kIZk_g",
  authDomain: "md-earthmovers.firebaseapp.com",
  projectId: "md-earthmovers",
  storageBucket: "md-earthmovers.firebasestorage.app",
  messagingSenderId: "1050496105636",
  appId: "1:1050496105636:web:094fd1d4ca9aa108f57a31",
  measurementId: "G-70C18KR8WY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);