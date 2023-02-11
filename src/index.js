// JS Goes here - ES6 supported

import "./css/main.scss";

// https://github.com/netlify-templates/one-click-hugo-cms/pull/479
const mobileMenu = document.querySelector('[data-mobile-menu]');
const nav = document.querySelector('[data-nav]');

function toggleMobileMenu() {
    nav.classList.toggle('menu-open');
}

mobileMenu.addEventListener('click', toggleMobileMenu);

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");
