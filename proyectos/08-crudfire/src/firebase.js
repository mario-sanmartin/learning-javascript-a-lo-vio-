import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAlXC-ySBG5a6P_3mv6os0Odmh3_oz_6FQ",
    authDomain: "depto269-30332.firebaseapp.com",
    databaseURL: "https://depto269-30332.firebaseio.com",
    projectId: "depto269-30332",
    storageBucket: "depto269-30332.appspot.com",
    messagingSenderId: "142026831897",
    appId: "1:142026831897:web:9f1cace5abcaa9f75b5288"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()

  export{ db,auth }
