import firebase from 'firebase';
// const firebase = require('firebase');
// Required for side-effects
require('firebase/firestore')
var provider = new firebase.auth.GoogleAuthProvider();

const config = {
  apiKey: "AIzaSyDtpWeX0Pdjd3tUHmObf41d06u_bSrF708",
  authDomain: "pokepoke-320e6.firebaseapp.com",
  databaseURL: "https://pokepoke-320e6.firebaseio.com",
  projectId: "pokepoke-320e6",
  storageBucket: "pokepoke-320e6.appspot.com",
  messagingSenderId: "947313841588"
};

// console.log(firebase);
firebase.initializeApp(config)
const db = firebase.firestore()
export { firebase, provider, db }