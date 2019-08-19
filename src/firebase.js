import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDg0H11QbH6vEw6fG7Asp7GldQA2fn5eIk",
  authDomain: "react-slack-skufach.firebaseapp.com",
  databaseURL: "https://react-slack-skufach.firebaseio.com",
  projectId: "react-slack-skufach",
  storageBucket: "react-slack-skufach.appspot.com",
  messagingSenderId: "74851659840",
  appId: "1:74851659840:web:3cee21f9727df691"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
