// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6KICqRrkrE3VoiYJmqyUO_HzUBzkVMPw",
  authDomain: "react-todo-4abf0.firebaseapp.com",
  projectId: "react-todo-4abf0",
  storageBucket: "react-todo-4abf0.appspot.com",
  messagingSenderId: "834886190804",
  appId: "1:834886190804:web:f46068f1d1aa247d971d41",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db };
