if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    console.warn("after load");
    navigator.serviceWorker.register("./my-sw.js");
  });
}
