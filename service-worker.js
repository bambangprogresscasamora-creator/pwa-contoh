self.addEventListener("install", e => {
  console.log("Service Worker: Installed");
});

self.addEventListener("fetch", e => {
  // biarkan lewat dulu (nanti bisa buat offline cache)
});
