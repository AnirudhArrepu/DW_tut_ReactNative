// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeKBmg7tE_yU-u7oxvkYv6KXnzAtmbFoM",
  authDomain: "dwtut-32649.firebaseapp.com",
  projectId: "dwtut-32649",
  storageBucket: "dwtut-32649.appspot.com",
  messagingSenderId: "493601006238",
  appId: "1:493601006238:web:2fa43562b4ad86d4a4918f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage }