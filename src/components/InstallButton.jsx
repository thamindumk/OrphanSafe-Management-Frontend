// In InstallButton.js

import React from 'react';

function InstallButton() {
  const handleInstall = () => {
    const deferredPrompt = window.deferredInstallPrompt;
    
    if (deferredPrompt) {
      // Trigger the installation
      deferredPrompt.prompt();

      // Wait for the user's choice
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }

        // Clear the deferred prompt reference
        window.deferredInstallPrompt = null;
      });
    }
  };

  return (
    <button onClick={handleInstall}>
      Install App
    </button>
  );
}

export default InstallButton;
