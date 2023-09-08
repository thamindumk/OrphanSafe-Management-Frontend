// const LOGIN_URL = "https://auth-service.ecodeit.com/api/users/auth";
// const LOGOUT_URL = "https://auth-service.ecodeit.com/api/users/logout";
export const LOGIN_URL = "/api/users/auth";
export const LOGOUT_URL = "/api/users/logout";
export const PATCH_FCM_TOKEN_URL = '/api/notifications/patchToken'

export const determineAppServerKey = () => {
  const vapidPublicKey =
    "BBRtHqulpPja3_U6GUSDwiVjBqVCgHUQiEl0WpiBpIdTtQ7rlLbRnmKoQnrA2Anh-eV5rLHp11_rb8bGgQQNM3U";
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
