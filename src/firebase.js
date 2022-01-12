import firebase from "firebase/app";
import "firebase/database";

let config = {
  apiKey: "AIzaSyAAe_cDwbvS-WSaoGmpwwDG49rYYvmOpe0",
    authDomain: "brincos-9f9fd.firebaseapp.com",
    databaseURL: "https://brincos-9f9fd.firebaseio.com",
    projectId: "brincos-9f9fd",
    storageBucket: "brincos-9f9fd.appspot.com",
    messagingSenderId: "226015777999"
};

firebase.initializeApp(config);

export default firebase.database();

