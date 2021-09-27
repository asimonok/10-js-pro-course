"use strict";
const siteNameElement = document.querySelector('.site-name');
const logoElement = document.querySelector('.logo');
const createComponent = (stringHtml) => {
    const bodyElement = new DOMParser().parseFromString(stringHtml, 'text/html').querySelector('body');
    return bodyElement.firstChild;
};
const model = {
    siteName: 'my app',
};
const Header = ({ siteName: State }) => createComponent(`
    <header class="header">
    <span class="logo">${siteName}</span>
    <a href="/index">Home</a>
    <a href="/contacts">Contacts</a>
    </header>`);
const Main = (params) => createComponent;
(`<main class="content">
    <input class="site-name" placeholder="Site name" />
    <h1>My app</h1>
    <p>Some text</p>
    <img src="cat.jpeg" />
    </main>
   `);
const onChangeName = (event) => {
    if (event.target) {
        const value = event.target.value;
    }
};
window.onChangeName = onChangeName;
const render = (rootElement) => {
    rootElement.innerHTML = '';
    rootElement.appendChild(Header(model));
    rootElement.appendChild(Main(model));
};
render(document.querySelector('#app'));
