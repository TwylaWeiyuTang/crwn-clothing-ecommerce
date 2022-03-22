// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjxpRqN3ixOjwZ7KXfRyoiJXj_hZPHoI4",
  authDomain: "crwn-db-f5260.firebaseapp.com",
  projectId: "crwn-db-f5260",
  storageBucket: "crwn-db-f5260.appspot.com",
  messagingSenderId: "527934674908",
  appId: "1:527934674908:web:54e66f9087dd8cbb33a119",
  measurementId: "G-73LN0WZTYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
export const auth = getAuth();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider);
//  prompt users to sign in with their Google Accounts by opening a pop-up window 