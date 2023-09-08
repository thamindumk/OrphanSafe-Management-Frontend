import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader";
import { configureSWWithFCM } from "./lib/firebase";
import { patchLocalToken } from "./slices/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { usePatchTokenMutation } from "./slices/userApiSlice";

const DefaultLayout = () => {
  const [isPageLoading, setLoading] = useState(true);
  const [tokenPatch, {isLoading}] = usePatchTokenMutation();
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (!isPageLoading) {
    // configure push notifications
    configureSWWithFCM(dispatch, authState, {tokenPatch, isLoading}, patchLocalToken)
  }

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

  useEffect(() => {

  }, [isLoading])

  return isPageLoading ? (
    <Loader />
  ) : (
    <>
      <ToastContainer />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
