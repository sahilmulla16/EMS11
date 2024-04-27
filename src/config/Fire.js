// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);