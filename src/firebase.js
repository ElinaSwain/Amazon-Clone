import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAT-220QN2QG81YKjrO5U9OlZpuJYojkZA",
    authDomain: "challenge-86701.firebaseapp.com",
    databaseURL: "https://challenge-86701.firebaseio.com",
    projectId: "challenge-86701",
    storageBucket: "challenge-86701.appspot.com",
    messagingSenderId: "870262483823",
    appId: "1:870262483823:web:18c1b4a039258a5363d69a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};