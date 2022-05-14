import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";

import { getStorage } from "firebase/storage";


// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzYTNbF5XLvHgmPki2XcB2NCEZ-yqW3GI",
    authDomain: "smit-portal-hackathon.firebaseapp.com",
    projectId: "smit-portal-hackathon",
    storageBucket: "smit-portal-hackathon.appspot.com",
    messagingSenderId: "160137962022",
    appId: "1:160137962022:web:5aba9b1cdeb79998e97ce7",
    measurementId: "G-HY1F2NNZVK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage();
const auth = getAuth();
const db = getFirestore();


export {
    auth,
    storage,
    db
}