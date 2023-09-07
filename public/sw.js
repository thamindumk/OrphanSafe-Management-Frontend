console.warn("hello there!!");
import { precacheAndRoute } from 'workbox-precaching'
self.addEventListener('install', function (event) {

  self.skipWaiting();
})

precacheAndRoute(self.__WB_MANIFEST)