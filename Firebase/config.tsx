// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig : { 
  apiKey : string,
  authDomain : string,
  projectId : string,
  storageBucket : string,
  messagingSenderId : string,
  appId : string 
} = {
  apiKey: "AIzaSyAteTovz2mtgkmrjUEfbyyRm4w-BDQhyQ4",
  authDomain: "restaurant-nextjs-typescript.firebaseapp.com",
  projectId: "restaurant-nextjs-typescript",
  storageBucket: "restaurant-nextjs-typescript.appspot.com",
  messagingSenderId: "972181672243",
  appId: "1:972181672243:web:5680a3013db6bcaf5a6e46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);