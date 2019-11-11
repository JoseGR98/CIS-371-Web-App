import firebase from "firebase/app";
import "firebase/database";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCkezF6tF03PvahbTdXvIggNKATk4pDhtU",
  authDomain: "store-project-c411b.firebaseapp.com",
  databaseURL: "https://store-project-c411b.firebaseio.com",
  projectId: "store-project-c411b",
  storageBucket: "store-project-c411b.appspot.com",
  messagingSenderId: "962535859444",
  appId: "1:962535859444:web:1fd9dca82f2af6f5d8eaa1",
  measurementId: "G-1FHVPY76FF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppDB = firebase.database();
const AppAUTH = firebase.auth();
export { AppDB, AppAUTH }; // Make it available to other modules