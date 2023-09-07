import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader";
import { determineAppServerKey } from "./config";
import { messaging, getToken } from "./lib/firebase";

const DefaultLayout = () => {
  const [isLoading, setLoading] = useState(true);

  // configure push notifications
  configurePushNotifications();
  // configure FCM (firebase cloud messaging)
  configureFCM();

  useEffect(() => {
    window.onload = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    // Clean up the event listener when the component unmounts
    return () => {
      window.onload = null;
    };
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <ToastContainer />
      <Outlet />
    </>
  );
};

const configurePushNotifications = () => {
  navigator.serviceWorker.ready.then(function (registration) {
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
};

const configureFCM = () => {
  navigator.serviceWorker.ready.then(function (registration) {
    getToken(messaging, {
      vapidKey:
        "BPVHx98dqzkSRetD4yNhIokXd_4tbBjEYcxKS3-3WZhgYWW9h5oVCd9JhI-oHM7Wj2xq4EmvYmpbOxzPeO0vKOo",
        serviceWorkerRegistration: registration
    }).then((data) => console.log(data));
  })
};

export default DefaultLayout;
