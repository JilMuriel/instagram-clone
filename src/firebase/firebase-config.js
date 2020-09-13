import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const FireBaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCmH8BkDEhfwV93zBKgyx1W-nuR6tQPqxE",
  authDomain: "instagram-clone-7e3bb.firebaseapp.com",
  databaseURL: "https://instagram-clone-7e3bb.firebaseio.com",
  projectId: "instagram-clone-7e3bb",
  storageBucket: "instagram-clone-7e3bb.appspot.com",
  messagingSenderId: "891536646790",
  appId: "1:891536646790:web:507313a3ec3c7ed4e4e707",
  measurementId: "G-VLW50LDZCK",
});

export default FireBaseConfig;
