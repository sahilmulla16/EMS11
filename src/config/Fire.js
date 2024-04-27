import firebase from 'firebase/app';
require("firebase/database");
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyBARs1tYteasvlCBfRrhVmPkBWlPQ05W30",
  authDomain: "employee-management-system-121.firebaseapp.com",
  databaseURL: "https://employee-management-system-121-default-rtdb.firebaseio.com",
  projectId: "employee-management-system-121",
  storageBucket: "employee-management-system-121.appspot.com",
  messagingSenderId: "510911840652",
  appId: "1:510911840652:web:b626a5aeb7e8d638ddd6a9",
  measurementId: "G-F44ZDWMCP0"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();

export default fire;