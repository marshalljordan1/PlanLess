import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyACsYCLhHuKlCetVWhgcyRDJ9vJb-ku8GM",
  authDomain: "plan-less-9f720.firebaseapp.com",
  projectId: "plan-less-9f720",
  storageBucket: "plan-less-9f720.appspot.com",
  messagingSenderId: "327254429870",
  appId: "1:327254429870:web:e1bd4445d7be60872b5d3f",
  measurementId: "G-NYSMHRLYPM",
});

// Firebase storage reference
const storage = getStorage(app);
export default storage;
