const cacheVersion = "v7";
const cacheURLs = [
  "/",
  "/css/index.min.css",
  "/fonts/SpaceMono-Regular.ttf",
  "/offline",
  "/img/kitsu.png",
  "/manifest.json"
];

self.addEventListener("install", (e) => {
  // console.log(`Service Worker: kitsu-${cacheVersion} Installing.`);
  e.waitUntil(
    caches.open(`kitsu-${cacheVersion}`).then((cache) => {
      return cache.addAll(cacheURLs);
    })
  );
});

self.addEventListener("activate", (e) => {
  console.log(`kitsu-${cacheVersion} available`);
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch((error) => {
        return caches.match("/offline");
      })
  );
});
// check cache => on false make network request => on false return offline page
