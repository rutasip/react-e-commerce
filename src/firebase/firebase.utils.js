import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA1DTnfFASDa2rJNIaoRUaVH7farf_Q0g4",
  authDomain: "react-e-commerce-db-ecaf3.firebaseapp.com",
  databaseURL: "https://react-e-commerce-db-ecaf3.firebaseio.com",
  projectId: "react-e-commerce-db-ecaf3",
  storageBucket: "react-e-commerce-db-ecaf3.appspot.com",
  messagingSenderId: "572124133869",
  appId: "1:572124133869:web:bd74827e1659a22640cfe4",
  measurementId: "G-SPMLEH4FQZ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
