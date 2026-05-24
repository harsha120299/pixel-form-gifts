// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUAEwg7yzLe6TQUXWm9leEGqogmXGmiBE",
  authDomain: "figuralk.firebaseapp.com",
  projectId: "figuralk",
  storageBucket: "figuralk.firebasestorage.app",
  messagingSenderId: "891389228224",
  appId: "1:891389228224:web:d7ed4f91e44bc84be22925"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFireStore(app);
export const storage = getStorage(app);