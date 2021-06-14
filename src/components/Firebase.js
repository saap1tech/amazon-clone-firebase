import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
    apiKey: "YourApiKey",
    authDomain: "YourDomain",
    projectId: "YourProjectId",
    storageBucket: "YourStorageBucket",
    messagingSenderId: "YourMsgId",
    appId: "YourAppId",
    measurementId: "YourMeasurementId"
});

const db = firebase.firestore();

export{ db };