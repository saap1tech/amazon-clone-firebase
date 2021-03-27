import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAWlBGjqBpWA2qRNgsIUwKYyNADIB-QAZY",
    authDomain: "clone-1d321.firebaseapp.com",
    projectId: "clone-1d321",
    storageBucket: "clone-1d321.appspot.com",
    messagingSenderId: "885461264077",
    appId: "1:885461264077:web:3922726b13fe928eeeab84",
    measurementId: "G-EZVKE1R233"
});

const db = firebase.firestore();

export{ db };