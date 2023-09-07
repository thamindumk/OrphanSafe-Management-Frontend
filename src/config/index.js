// const LOGIN_URL = "https://auth-service.ecodeit.com/api/users/auth";
// const LOGOUT_URL = "https://auth-service.ecodeit.com/api/users/logout";
const LOGIN_URL = "/api/users/auth";
const LOGOUT_URL = "/api/users/logout";

const determineAppServerKey = () => {
  const vapidPublicKey =
    "BPVHx98dqzkSRetD4yNhIokXd_4tbBjEYcxKS3-3WZhgYWW9h5oVCd9JhI-oHM7Wj2xq4EmvYmpbOxzPeO0vKOo";
  return urlBase64ToUint8Array(vapidPublicKey);
};

const urlBase64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

export { LOGIN_URL, LOGOUT_URL, determineAppServerKey };
