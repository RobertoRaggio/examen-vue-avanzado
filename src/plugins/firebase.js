// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJd6FXEDfPsKbLmRZKFDFAl8Ng8m_YuzY",
  authDomain: "examen-vue-f2ac7.firebaseapp.com",
  projectId: "examen-vue-f2ac7",
  storageBucket: "examen-vue-f2ac7.appspot.com",
  messagingSenderId: "4912847922",
  appId: "1:4912847922:web:6970801576b24d8bdef02b",
  measurementId: "G-TM2YY9XVDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);