import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBCEagjVhEeyrLn-gAL4UlQdzcuXlU2xHw",
  authDomain: "orphansafe-mangement-frontend.firebaseapp.com",
  projectId: "orphansafe-mangement-frontend",
  storageBucket: "orphansafe-mangement-frontend.appspot.com",
  messagingSenderId: "765444392899",
  appId: "1:765444392899:web:d0976ffeb9821c3263df76",
  measurementId: "G-RNQDD4KTJ4",
});

const messaging = getMessaging(firebaseApp);

self.addEventListener("install", function (event) {
  self.skipWaiting();
});

console.warn("RUN FROM:service worker.js");
