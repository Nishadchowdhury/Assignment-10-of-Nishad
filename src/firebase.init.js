
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVpdRY2uPUdtUZ99fL5D71uBsDQ7Pv4do",
  authDomain: "assignment-10-3a9c6.firebaseapp.com",
  projectId: "assignment-10-3a9c6",
  storageBucket: "assignment-10-3a9c6.appspot.com",
  messagingSenderId: "891547264636",
  appId: "1:891547264636:web:579e50a36e1eabd378cbf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;