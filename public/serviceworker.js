const cacheVersion = "v8";
const cacheURLs = [
  "/",
  "/css/index.min.css",
  "/fonts/SpaceMono-Regular.ttf",
  "/img/kitsu.png",
  "/manifest.json"
];
const offlineURL = "/offline.html";

self.addEventListener("install", (e) => {
  // console.log(`Service Worker: kitsu-${cacheVersion} Installing.`);
  e.waitUntil(
    Promise.all(
      caches.open(`kitsu-${cacheVersion}`).then((cache) => {
        cache.addAll(cacheURLs);
        cache.add(offlineURL);
        return console.log("cached");
      })
    )
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
        return caches.match(offlineURL);
      })
  );
});
// check cache => on false make network request => on false return offline page
