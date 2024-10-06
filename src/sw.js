self.addEventListener('install', (event) => {
    // Force the waiting service worker to become the active service worker
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    const requestUrl = new URL(event.request.url);

    // Only handle image requests from /img/
    if (requestUrl.pathname.startsWith('/img/')) {
        const compressedImageUrl = requestUrl.pathname.replace('/img/', '/img-cmp/');

        // Check if compressed image exists 
        event.respondWith(
            fetch(compressedImageUrl).then(response => {
                // If compressed image exists, return it
                if (response.ok) {
                    return response;
                }
                // Fallback to original image if not found
                return fetch(event.request);
            }).catch(() => {
                // Fallback in case of an error
                return fetch(event.request);
            })
        );
    }
});
