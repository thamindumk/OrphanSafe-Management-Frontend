self.addEventListener("install", function (event) {
  self.skipWaiting();
  self.registration.showNotification("ServiceWorker!", {
    body: "I Am installed"
  })
});


console.warn("RUN FROM:service worker.js");