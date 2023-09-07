import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCEagjVhEeyrLn-gAL4UlQdzcuXlU2xHw",
  authDomain: "orphansafe-mangement-frontend.firebaseapp.com",
  projectId: "orphansafe-mangement-frontend",
  storageBucket: "orphansafe-mangement-frontend.appspot.com",
  messagingSenderId: "765444392899",
  appId: "1:765444392899:web:d0976ffeb9821c3263df76",
  measurementId: "G-RNQDD4KTJ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
export { messaging, getToken };
