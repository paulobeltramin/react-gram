

import firebase from "firebase";




const firebaseApp= firebase.initializeApp({
  apiKey: "AIzaSyBjU34vyNMSbhodKeKHTTpwWbSbJ1VuKBE",
  authDomain: "reactgram-7abd3.firebaseapp.com",
  projectId: "reactgram-7abd3",
  storageBucket: "reactgram-7abd3.appspot.com",
  messagingSenderId: "58536525382",
  appId: "1:58536525382:web:3201d228b16e19697c5447"
});


const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db,auth,storage,functions}

