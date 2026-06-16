import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB8BDEHnFhpVpxEtmaeiu7pH7e2eUp_eZo",
  authDomain: "shopuy-dev.firebaseapp.com",
  projectId: "shopuy-dev",
  storageBucket: "shopuy-dev.firebasestorage.app",
  messagingSenderId: "857811966746",
  appId: "1:857811966746:web:a8ae5101eb185978016aa3"
};

export const app = initializeApp(firebaseConfig);