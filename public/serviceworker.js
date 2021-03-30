const cacheVersion = "v5";
const cacheURLs = [
  "/",
  "css/var.css",
  "css/reset.css",
  "css/nav.css",
  "css/index.css",
  "fonts/SpaceMono-Regular.ttf",
  "offline",
  "img/kitsu.png",
  "manifest.json"
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

// self.addEventListener("fetch", (e) => {
//   // console.log("neet", e.request.url);
//   e.respondWith(
//     fetch(e.request)
//       .then((response) => {
//         const rs = response.clone();
//         caches.open(`kitsu-${cacheVersion}`).then((cache) => {
//           cache.put(e.request, rs);
//         });
//         return response;
//       })
//       .catch(() => {
//         let isOffline = true;
//         if (e.request.method === "GET") {
//           caches.open(`kitsu-${cacheVersion}`).then((c) => {
//             c.keys().then((r) => {
//               r.forEach((p) => {
//                 if (p.url.includes(e.request.url)) {
//                   isOffline = false;
//                 }
//               });
//             });
//           });
//         }
//         if (isOffline) {
//           return caches.match(e.request.url);
//         }
//       })
//   );
// });

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
