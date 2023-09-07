import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDorykngAsWD0m2ubhGBcP40nzsmAJJV8w",
  authDomain: "sisha-master.firebaseapp.com",
  projectId: "sisha-master",
  storageBucket: "sisha-master.appspot.com",
  messagingSenderId: "73720856571",
  appId: "1:73720856571:web:d1cf439807a6487dad155e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
