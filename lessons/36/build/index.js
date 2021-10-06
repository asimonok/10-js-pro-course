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
const model = new Model({
    siteName: "",
    pathname: window.location.pathname,
});
const createComponent = (stringHtml) => {
    const bodyElement = new DOMParser()
        .parseFromString(stringHtml, "text/html")
        .querySelector("body");
    return bodyElement.firstChild;
};
const onNavigateToPage = (event) => {
    event.preventDefault();
    if (event.target) {
        const hrefAttr = event.target.getAttribute("href");
        window.history.pushState(null, hrefAttr !== null && hrefAttr !== void 0 ? hrefAttr : "", hrefAttr);
        model.update({ pathname: window.location.pathname });
    }
};
window.onNavigateToPage = onNavigateToPage;
const onChangeName = (event) => {
    if (event.target) {
        const value = event.target.value;
        model.update({ siteName: value });
    }
};
window.onChangeName = onChangeName;
const Header = (params) => createComponent(`<header class="header">
  <span class="logo">${params.siteName}</span>
  <a href="/home" onclick="onNavigateToPage(event)">Home</a>
  <a href="/contacts" onclick="onNavigateToPage(event)">Contacts</a>
  </header>`);
const HomePage = (params) => createComponent(`<main class="content">
  <input class="site-name" value="${params.siteName}" placeholder="Site name" onChange="onChangeName(event)"/>
  <h1>My app</h1>
  <p>Some text</p>
  <img src="cat.jpeg" />
  </main>`);
const ContactsPage = (params) => createComponent(`<main class="contacts">
  <h1>Contacts</h1>
  <p>Some info about site</p>
  <img src="cat-computer.jpeg" />
  </main>`);
const render = (rootElement, model) => {
    rootElement.innerHTML = " ";
    rootElement.appendChild(Header(model));
    if (model.pathname === "/home" || model.pathname === "/") {
        rootElement.appendChild(HomePage(model));
    }
    if (model.pathname === "/contacts") {
        rootElement.appendChild(ContactsPage(model));
    }
};
render(document.querySelector("#app"), model.state);
window.addEventListener("popstate", (event) => {
    model.update({ pathname: window.location.pathname });
});
const unsubscribe = model.subscribe((state) => {
    render(document.querySelector("#app"), state);
});
