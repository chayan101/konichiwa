import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBJsdJhQ8B_GgytFJMZI4ByKGDqRb8vNZA",
  authDomain: "konichiwa-23b9b.firebaseapp.com",
  projectId: "konichiwa-23b9b",
  storageBucket: "konichiwa-23b9b.appspot.com",
  messagingSenderId: "257676387722",
  appId: "1:257676387722:web:9ec50517919e6be5e0d473",
  measurementId: "G-843SL5K155"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
