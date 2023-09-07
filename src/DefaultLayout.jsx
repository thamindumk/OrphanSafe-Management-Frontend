import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader";
import { configureSWWithFCM } from "./lib/firebase";

const DefaultLayout = () => {
  const [isLoading, setLoading] = useState(true);

  // configure push notifications
  configureSWWithFCM();

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

export default DefaultLayout;
