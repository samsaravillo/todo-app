//import firebase from 'firebase';

// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyBMgYcu4ifbQd5o29cfYbLuZ4SWYfdYHuI",
//     authDomain: "freakyjolly-c91ee.firebaseapp.com",
//     databaseURL: "https://freakyjolly-c91ee.firebaseio.com",
//     projectId: "freakyjolly-c91ee",
//     storageBucket: "freakyjolly-c91ee.appspot.com",
//     messagingSenderId: "997516632089",
//     appId: "1:997516632089:web:46746c6f9815f43e2c4a88",
//     measurementId: "G-V6X4RQ389S"
// });

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseAppConfig = {
  apiKey: "AIzaSyCwWAa8fCkFlDSYZVasENVrV7l412YFwgM",
  authDomain: "todoapp-39590.firebaseapp.com",
  projectId:  "todoapp-39590",
  storageBucket: "todoapp-39590.appspot.com",
  messagingSenderId: "1001544613735",
  appId: "1:1001544613735:web:97bbc82976f0acfbf579c2",
  measurementId: "G-0Y4JQF8T7P"
};

const app = firebase.initializeApp(firebaseAppConfig);
const db = firebase.getFirestore(app)

export default db;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// //const analytics = getAnalytics(app);