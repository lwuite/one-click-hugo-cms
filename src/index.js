// JS Goes here - ES6 supported

import "./css/main.scss";

// The Service Worker intercepts requests to the /img/ path and redirects them to /img-cmp/.
// This approach helps reduce site traffic and image sizes without requiring complex changes to Hugo.
// It allows us to continue using the /img/ path freely while optimizing performance.
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);

        if (registration.waiting) {
            registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }

        // Reload the page only if this is the first time the Service Worker is taking control
        // if (!navigator.serviceWorker.controller) {
        //     console.log('Service Worker in control for the first time, reloading page to apply SW...');
        //     window.location.reload();
        // }
    }).catch((error) => {
        console.error('Service Worker registration failed:', error);
    });
}

// https://github.com/netlify-templates/one-click-hugo-cms/pull/479
const mobileMenu = document.querySelector('[data-mobile-menu]');
const nav = document.querySelector('[data-nav]');

function toggleMobileMenu() {
    nav.classList.toggle('menu-open');
}

mobileMenu.addEventListener('click', toggleMobileMenu);

// Say hello
console.log("https://kelvin.id was here 👨‍💻, working like a 🕷️ on the 🕸️, to build a 🌸 of a website😎~ASD~");
