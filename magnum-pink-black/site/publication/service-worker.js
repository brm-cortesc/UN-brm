// Use a cacheName for cache versioning
var cacheName = 'v1:magnum/p-b',
    cacheFiles = [
                '/',
                '/images/pink-sprite.png',
                '/images/black-sprite.png',
                '/css/pink-black.min.css',
                '/js/init.js',
                '/js/sprite.js',
                '/js/pink-black.js',
                '/js/pink.js',
                '/js/black.js',
                '/images/gif/black/black-1.gif?555',
                '/images/gif/black/black-2.gif?555',
                '/images/gif/black/black-3.gif?555',
                '/images/gif/black/black-4.gif?555',
                '/images/gif/black/black-5.gif?555',
                '/images/gif/black/black-6.gif?555',
                '/images/gif/black/black-7.gif?555',
                '/images/gif/black/black-8.gif?555',
                '/images/gif/black/black-9.gif?555',
                '/images/gif/black/black-10.gif?555',
                '/images/gif/black/black-11.gif?555',
                '/images/gif/black/black-12.gif?555',
                '/images/gif/pink/pink-1.gif?555',
                '/images/gif/pink/pink-2.gif?555',
                '/images/gif/pink/pink-3.gif?555',
                '/images/gif/pink/pink-4.gif?555',
                '/images/gif/pink/pink-5.gif?555',
                '/images/gif/pink/pink-6.gif?555',
                '/images/gif/pink/pink-7.gif?555',
                '/images/gif/pink/pink-8.gif?555',
                '/images/gif/pink/pink-9.gif?555',
                '/images/gif/pink/pink-10.gif?555',
                '/images/gif/pink/pink-11.gif?555',
                '/images/gif/pink/pink-12.gif?555'
            ]

// During the installation phase, you'll usually want to cache static assets.
self.addEventListener('install', function(e) {
    // Once the service worker is installed, go ahead and fetch the resources to make this work offline.
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(cacheFiles).then(function() {
                self.skipWaiting();
            });
        })
    );
});

// when the browser fetches a URL…
self.addEventListener('fetch', function(event) {
    // … either respond with the cached object or go ahead and fetch the actual URL
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                // retrieve from cache
                return response;
            }
            // fetch as normal
            return fetch(event.request);
        })
    );
});