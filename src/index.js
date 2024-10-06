// JS Goes here - ES6 supported

import "./css/main.scss";

// The Service Worker intercepts requests to the /img/ path and redirects them to /img-cmp/.
// This approach helps reduce site traffic and image sizes without requiring complex changes to Hugo.
// It allows us to continue using the /img/ path freely while optimizing performance.
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(() => {
            console.log('Service Worker registered');
        })
        .catch((error) => {
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
