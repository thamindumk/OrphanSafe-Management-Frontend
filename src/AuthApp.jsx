import React from "react";
import { Outlet } from "react-router-dom";
import InstallButton from "./components/InstallButton";

const AuthApp = () => {

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthApp;
