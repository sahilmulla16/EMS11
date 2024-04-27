import firebase from 'firebase/app';
require("firebase/database");
require("firebase/auth");

const config = {
  apiKey: "AIzaSyBbJjYiENW_khO-w4x1CTHdKI8EIWsvnRY",
  authDomain: "employee-management-system-111.firebaseapp.com",
  databaseURL: "https://employee-management-system-111-default-rtdb.firebaseio.com",
  projectId: "employee-management-system-111",
  storageBucket: "employee-management-system-111.appspot.com",
  messagingSenderId: "702903087835",
  appId: "1:702903087835:web:5c44d43be9f925a090d2fe",
  measurementId: "G-KWGPCZ0ZN2"
};

// Initialize Firebase
const fire = firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();

export default fire;