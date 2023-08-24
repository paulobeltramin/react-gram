






const firebaseApp= {
  apiKey: "AIzaSyBjU34vyNMSbhodKeKHTTpwWbSbJ1VuKBE",
  authDomain: "reactgram-7abd3.firebaseapp.com",
  projectId: "reactgram-7abd3",
  storageBucket: "reactgram-7abd3.appspot.com",
  messagingSenderId: "58536525382",
  appId: "1:58536525382:web:3201d228b16e19697c5447"
};

firebase.initializeApp(firebaseApp)


const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export {db,auth,storage as default}

