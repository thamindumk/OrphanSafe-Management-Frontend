// const LOGIN_URL = "https://auth-service.ecodeit.com/api/users/auth";
// const LOGOUT_URL = "https://auth-service.ecodeit.com/api/users/logout";
export const LOGIN_URL = "/api/users/auth";
export const LOGOUT_URL = "/api/users/logout";
export const PATCH_FCM_TOKEN_URL = "/api/notifications/patchToken";
export const GET_CASE_LIST_URL = "/api/case/getCaseList";
export const GET_CASE_BY_CASEID_URL = "/api/case/getCaseInfoByCaseId";
export const CREATE_CASE_URL = "/api/case/createCase";
export const ORPHANAGE_REGISTER_URL = "/api/users/registerOrphanage";
export const GET_ROLES_LIST_URL = "/api/users/roles";
export const GET_CHILD_PROFILE_NAME_LIST =
  "/api/profile/getChildProfileNameListByOrphanageId";
export const GET_SOCIAL_WORKER_NAME_LIST =
  "/api/profile/getSocialWorkerNameListByOrphanageId";

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
