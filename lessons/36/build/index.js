"use strict";
class Model {
    constructor(initialState) {
        this.state = initialState;
        this.subscribers = [];
    }
    update(updatedState) {
        this.state = Object.assign(Object.assign({}, this.state), updatedState);
        this.subscribers.forEach((callback) => {
            callback(this.state);
        });
    }
    subscribe(callback) {
        const subscriber = (state) => callback(state);
        this.subscribers.push(subscriber);
        return () => {
            this.subscribers = this.subscribers.filter((item) => item !== subscriber);
        };
    }
}
const model = new Model({ siteName: 'My app' });
const createComponent = (stringHtml) => {
    const bodyElement = new DOMParser().parseFromString(stringHtml, 'text/html').querySelector('body');
    return bodyElement.firstChild;
};
const Header = ({ siteName }) => createComponent(`<header class="header">
    <span class="logo">${siteName}</span>
    <a href="/index">Home</a>
    <a href="/contacts">Contacts</a>
    </header>`);
const onChangeName = (event) => {
    if (event.target) {
        const value = event.target.value;
        model.update({ siteName: value });
        console.log(value);
        console.log(model.state);
    }
};
window.onChangeName = onChangeName;
const Main = ({ siteName }) => createComponent(`<main class="content">
    <input class="site-name" placeholder="Site name" onchange="onChangeName(event)" />
    <h1>My app</h1>
    <p>Some text</p>
    <img src="cat.jpeg" />
    </main>
   `);
const render = (rootElement, model) => {
    rootElement.innerHTML = '';
    rootElement.appendChild(Header(model));
    rootElement.appendChild(Main(model));
};
render(document.querySelector('#app'), model.state);
model.update({ siteName: '1we' });
model.update({ siteName: '235' });
const unsubscribe = model.subscribe((state) => {
    render(document.querySelector('#app'), state);
});
