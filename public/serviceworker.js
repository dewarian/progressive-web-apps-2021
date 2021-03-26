const cacheVersion = "caching-v1";
const cacheURLs = ["index.html"];

self.addEventListener("install", async (e) => {
  console.log(`Service Worker: Installed`);
  caches.open(cacheVersion).then((cache) => {
    return cache.add("/index.html");
  });
  return self.skipWaiting();
});

// self.addEventListener("activate", () => {});

/* 
critical css in head, de rest in de body, critical inline style
Termen van de presentaties even doornemen en begrijpen. zodat je weet awt het doet en als je het hebt toegepast.

*/
