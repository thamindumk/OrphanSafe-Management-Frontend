import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import { determineAppServerKey } from "../../config";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBCEagjVhEeyrLn-gAL4UlQdzcuXlU2xHw",
  authDomain: "orphansafe-mangement-frontend.firebaseapp.com",
  projectId: "orphansafe-mangement-frontend",
  storageBucket: "orphansafe-mangement-frontend.appspot.com",
  messagingSenderId: "765444392899",
  appId: "1:765444392899:web:d0976ffeb9821c3263df76",
  measurementId: "G-RNQDD4KTJ4",
};

export const configureSWWithFCM = async (
  dispatch,
  { userInfo, fcmToken },
  { tokenPatch, isLoading },
  patchLocalToken
) => {
  const firebaseApp = initializeApp(firebaseConfig);
  const messaging = getMessaging(firebaseApp);

  if ("serviceWorker" in navigator) {
    const registration = await navigator.serviceWorker.register(
      import.meta.env.MODE === "production" ? "/sw.js" : "/dev-sw.js?dev-sw",
      { type: import.meta.env.MODE === "production" ? "classic" : "module" }
    );

    if (Notification.permission === "denied") {
      return;
    } else if (Notification.permission === "granted") {

      if (!userInfo || fcmToken) {
        return
      }
      // sync token with server
      if (!isLoading) {
        const currentToken = await getToken(messaging, {
          vapidKey:
            "BBRtHqulpPja3_U6GUSDwiVjBqVCgHUQiEl0WpiBpIdTtQ7rlLbRnmKoQnrA2Anh-eV5rLHp11_rb8bGgQQNM3U",
          serviceWorkerRegistration: registration,
        });
        console.log(currentToken)
        await patchToken(
          dispatch,
          userInfo,
          tokenPatch,
          patchLocalToken,
          currentToken
        );
      }
    } else {
      // register notification and permission
      if ("PushManager" in window) {
        const subscription = await registration.pushManager.getSubscription();
        try {
          await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: determineAppServerKey(),
          });
        } catch (error) {
          toast.error(error.message)
        }
      } else {
        toast.error("PushManager is not supported in this browser.");
      }
    }
  }
};

// patch token with server request
const patchToken = async (
  dispatch,
  userInfo,
  tokenPatch,
  patchLocalToken,
  token
) => {
  console.log("patch request");
  try {
    const res = await tokenPatch({
      userId: userInfo.userId,
      token: token,
    }).unwrap();
    dispatch(patchLocalToken(res.latestToken));
  } catch (error) {
    toast.error(error.message);
  }
};
