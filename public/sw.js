import {
  cleanupOutdatedCaches,
  precacheAndRoute,
} from "workbox-precaching";
import { clientsClaim } from "workbox-core";
import { NavigationRoute, registerRoute } from "workbox-routing";

import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST);

// clean old assets
cleanupOutdatedCaches();

// let allowlist;
// if (import.meta.env.DEV) {
//   allowlist = [/^\/$/];
// }

// // to allow work offline
// registerRoute(
//   new NavigationRoute(createHandlerBoundToURL("index.html"), { allowlist })
// );

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

self.skipWaiting();
clientsClaim();
