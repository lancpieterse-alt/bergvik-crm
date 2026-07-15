// Bergvik Field — minimal passthrough service worker
// Purpose: enables "Add to Home Screen" / PWA installability only.
// No caching strategy — all requests hit the network.

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)));
