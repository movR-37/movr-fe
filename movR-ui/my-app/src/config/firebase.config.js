// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYZSDc0XO-r8-ptGywvu6ZLIpXcxznWDc",
    authDomain: "movr-ec0a0.firebaseapp.com",
    projectId: "movr-ec0a0",
    storageBucket: "movr-ec0a0.appspot.com",
    messagingSenderId: "944679069344",
    appId: "1:944679069344:web:d3c64720a1c1c9fcdd4bc5",
    measurementId: "G-T6V3JMRN5G"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default fire;
export const db = fire.firestore();
export const auth = fire.auth();