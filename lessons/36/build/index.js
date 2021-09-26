"use strict";
const siteNameElement = document.querySelector('.site-name');
const logoElement = document.querySelector('.logo');
if (siteNameElement) {
    siteNameElement.addEventListener('input', (event) => {
        if (event.target && logoElement) {
            logoElement.textContent = event.target.value;
        }
    });
}
const createComponent = (stringHtml) => {
    const bodyElement = new DOMParser().parseFromString(stringHtml, 'text/html').querySelector('body');
    if (bodyElement) {
        return bodyElement.firstChild;
    }
};
