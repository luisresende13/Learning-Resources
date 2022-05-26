
// Na linha de comando: 
//     npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuOFoN_IVHTDDwucpWe5_iA-0YRnvWzh8",
  authDomain: "mood-tracker-13.firebaseapp.com",
  databaseURL: "https://mood-tracker-13-default-rtdb.firebaseio.com",
  projectId: "mood-tracker-13",
  storageBucket: "mood-tracker-13.appspot.com",
  messagingSenderId: "960778407993",
  appId: "1:960778407993:web:913d6f5f5ae3db204f3de8",
  measurementId: "G-GL6592N615"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// -------------- Inicializar o SDK do Javascript do Realtime Database --------------- //

import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "projectId.firebaseapp.com",
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: "https://databaseName.firebaseio.com",
  storageBucket: "bucket.appspot.com"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);