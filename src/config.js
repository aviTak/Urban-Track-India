import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

var firebaseConfig = {
    apiKey: "AIzaSyAXv-CHH7Fhk6lxOBlOy7iUG5qazN5UNBk",
    authDomain: "urban-track.firebaseapp.com",
    databaseURL: "https://urban-track.firebaseio.com",
    projectId: "urban-track",
    storageBucket: "urban-track.appspot.com",
    messagingSenderId: "429975097901",
    appId: "1:429975097901:web:9d17999ce670e136c45ea4",
    measurementId: "G-0WQWMR4PGX"
};
    
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;