const CACHE_NAME = 'arahan-kerja-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  'https://upload.wikimedia.org/wikipedia/commons/1/1a/Coat_of_arms_of_Penang.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
