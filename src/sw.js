self.addEventListener('install', (event) => {
    // Force the waiting service worker to become the active service worker
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim()); // Ensures the SW controls all clients immediately
});

self.addEventListener('fetch', (event) => {
    const requestUrl = new URL(event.request.url);

    // Only handle image requests from /img/
    if (requestUrl.pathname.startsWith('/img/')) {
        const compressedImageUrl = requestUrl.pathname.replace('/img/', '/img-cmp/');

        console.log(`Intercepted request: ${requestUrl.pathname}, Redirecting to: ${compressedImageUrl}`);

        // Fetch compressed image
        event.respondWith(
            fetch(compressedImageUrl).then(response => {
                // Check if the response is a valid image
                const contentType = response.headers.get('Content-Type');
                if (response.ok && contentType && contentType.startsWith('image/')) {
                    // Compressed image exists and is valid, return it
                    return response;
                }
                // If the response is not an image, fall back to the original
                console.warn(`Expected image but got ${contentType}, falling back to original: ${requestUrl.pathname}`);
                return fetch(event.request);
            }).catch((error) => {
                console.error(`Failed to fetch compressed image: ${error}, falling back to original image.`);
                // Fallback to original image in case of error
                return fetch(event.request);
            })
        );
    }
});
