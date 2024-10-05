import {initializeApp} from 'firebase/app';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const ENV_VARS = {
  FIREBASE_API_KEY: import.meta.env.VITE_FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID: import.meta.env.VITE_FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const firebaseConfig = {
  apiKey: ENV_VARS.FIREBASE_API_KEY,
  authDomain: ENV_VARS.FIREBASE_AUTH_DOMAIN,
  projectId:  ENV_VARS.FIREBASE_PROJECT_ID,
  storageBucket: ENV_VARS.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: ENV_VARS.FIREBASE_MESSAGING_SENDER_ID,
  appId: ENV_VARS.FIREBASE_APP_ID,
  measurementId: ENV_VARS.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const storage = getStorage(app)

export {app, auth, onAuthStateChanged, db, analytics, storage}