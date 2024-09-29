import {initializeApp} from 'firebase/app';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbSb9nFLuYyUwzGjj2dJP9gtuTGtEIjO4",
  authDomain: "cryptflex00.firebaseapp.com",
  projectId: "cryptflex00",
  storageBucket: "cryptflex00.appspot.com",
  messagingSenderId: "498398936185",
  appId: "1:498398936185:web:845acd46c04df49824a8a8"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Initialize Firestore
const auth = getAuth(app);

export {app, auth, onAuthStateChanged, db}