import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import {determineAppServerKey} from '../../config'

const firebaseConfig = {
  apiKey: "AIzaSyBCEagjVhEeyrLn-gAL4UlQdzcuXlU2xHw",
  authDomain: "orphansafe-mangement-frontend.firebaseapp.com",
  projectId: "orphansafe-mangement-frontend",
  storageBucket: "orphansafe-mangement-frontend.appspot.com",
  messagingSenderId: "765444392899",
  appId: "1:765444392899:web:d0976ffeb9821c3263df76",
  measurementId: "G-RNQDD4KTJ4",
};

export const configureSWWithFCM = () => {
  const firebaseApp = initializeApp(firebaseConfig);
  const messaging = getMessaging(firebaseApp);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register(
        import.meta.env.MODE === "production" ? "/sw.js" : "/dev-sw.js?dev-sw",
        { type: import.meta.env.MODE === "production" ? "classic" : "module" }
      )
      .then((registration) => {
        getToken(messaging, {
          vapidKey: "BPVHx98dqzkSRetD4yNhIokXd_4tbBjEYcxKS3-3WZhgYWW9h5oVCd9JhI-oHM7Wj2xq4EmvYmpbOxzPeO0vKOo",
          serviceWorkerRegistration: registration,
        }).then((currentToken) => {
          console.log("fcm token", currentToken);

          if ("PushManager" in window) {
            return registration.pushManager
              .getSubscription()
              .then(function (subscription) {
                registration.pushManager
                  .subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: determineAppServerKey(),
                  })
                  .then(function (subscription) {
                    // Handle the subscription object, which represents the user's subscription to push notifications.
                  })
                  .catch(function (error) {
                    console.error(error);
                  });
              });
          } else {
            console.error("PushManager is not supported in this browser.");
          }
        });
      });
  }
};
