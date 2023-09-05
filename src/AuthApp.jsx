import React, {useEffect, useState} from "react";
import { Outlet } from "react-router-dom";
import InstallButton from './components/InstallButton'

const AuthApp = () => {
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      // Prevent the default browser prompt
      event.preventDefault();
      // Enable the custom install button
      setCanInstall(true);
      // Store the event for later use
      // You can use this event to trigger installation when the button is clicked
      window.deferredInstallPrompt = event;
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  return <>
  <Outlet />
  {canInstall && <InstallButton />}
  </>
};

export default AuthApp;
