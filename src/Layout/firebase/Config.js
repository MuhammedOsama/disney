import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// config
const firebaseConfig = {
    apiKey: "AIzaSyBJIcXmX3p4orlwDQ95FpRIwq2Me46BDUU",
    authDomain: "disney-62efe.firebaseapp.com",
    projectId: "disney-62efe",
    storageBucket: "disney-62efe.appspot.com",
    messagingSenderId: "414632566815",
    appId: "1:414632566815:web:fea4b7c411b18c39b5352a",
    measurementId: "G-265B9TLSKL"
}

// Initialize firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
