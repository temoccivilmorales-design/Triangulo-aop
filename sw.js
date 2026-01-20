const CACHE_NAME = "triangulo-cache-v1";
const FILES_TO_CACHE = [
  "/Triangulo-aop/",
  "/Triangulo-aop/index.html",
  "/Triangulo-aop/manifest.json",
  "/Triangulo-aop/sw.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((
