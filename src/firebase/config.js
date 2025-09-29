// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAealW3YlnMQ_TodXt0efqBV6LoD59ztTs",
  authDomain: "ecommerce-app-ed766.firebaseapp.com",
  databaseURL: "https://ecommerce-app-ed766-default-rtdb.firebaseio.com",
  projectId: "ecommerce-app-ed766",
  storageBucket: "ecommerce-app-ed766.appspot.com",
  messagingSenderId: "927018982147",
  appId: "1:927018982147:web:9306e0affdc4d5a30a2736",
  measurementId: "G-ERN9T85TNE",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export { app, auth, db, storage, analytics };
export default app;
