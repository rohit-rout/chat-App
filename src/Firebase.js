import firebase from "firebase";


 
const firebaseConfig = {
  apiKey: "AIzaSyAxJ7y8SzFAAuBkLscv8EpECx2yahsSeWg",
  authDomain: "whats-app-clone-31b70.firebaseapp.com",
  projectId: "whats-app-clone-31b70",
  storageBucket: "whats-app-clone-31b70.appspot.com",
  messagingSenderId: "708644768334",
  appId: "1:708644768334:web:fe6685e471abf0e7ec511f"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
const auth=new firebase.auth();
export{ auth,provider};
export default db;


