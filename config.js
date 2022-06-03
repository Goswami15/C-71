import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBBD2Wp3h1zY4JHvjDFikxzZsCzd6r5ZSs",
    authDomain: "c-71-b8d15.firebaseapp.com",
    projectId: "c-71-b8d15",
    storageBucket: "c-71-b8d15.appspot.com",
    messagingSenderId: "904277335046",
    appId: "1:904277335046:web:5ad63f97a0df0506913787"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
