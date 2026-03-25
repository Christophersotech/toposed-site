// Service Worker désactivé - ne fait rien
self.addEventListener('install', () => {
    self.skipWaiting();
});

self.addEventListener('activate', () => {
    self.clients.claim();
});

self.addEventListener('fetch', () => {
    // Laisser les requêtes passer normalement
});
