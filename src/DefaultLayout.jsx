import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader";
import { determineAppServerKey } from "./config";

const DefaultLayout = () => {
  const [isLoading, setLoading] = useState(true);

  // configure push notifications
  configurePushNotifications();

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
      return registration.pushManager.getSubscription()
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
      })
    } else {
      console.error("PushManager is not supported in this browser.");
    }
  });
};

export default DefaultLayout;
