self.addEventListener("install", function (event) {
  self.skipWaiting();
});
console.warn("RUN:service worker.js");
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/my-sw.js')
}