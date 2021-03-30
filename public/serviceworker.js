const cacheVersion = "v1";
const cacheURLs = [
  "/",
  "dist/css/index.css",
  "dist/fonts/SpaceMono-Regular.ttf",
  "dist/offline"
];

self.addEventListener("install", (e) => {
  console.log(`Service Worker: kitsu-${cacheVersion} Installing.`);
  e.waitUntil(
    caches.open(`kitsu-${cacheVersion}`).then((cache) => {
      return cache.addAll(cacheURLs);
    })
  );
});

self.addEventListener("activate", (e) => {
  console.log(`kitsu-${cacheVersion} available`);
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches
      .open(`kitsu-${cacheVersion}`)
      .then(async (cache) => {
        const res = await cache.match(e.request);
        if (res) {
          return res;
        }
        return fetch(e.request, res.clone());
      })
      .catch(async (e) => {
        const cache = await caches.open(`kitsu-${cacheVersion}`);
        return await cache.match("/offline");
      })
  );
});

// self.addEventListener("activate", () => {});

/* 
critical css in head, de rest in de body, critical inline style
Termen van de presentaties even doornemen en begrijpen. zodat je weet awt het doet en als je het hebt toegepast.

*/
