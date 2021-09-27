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
    if (event.target) {
        const dataset = event.target.dataset;
        window.history.pushState(null, dataset.href, dataset.href);
        model.update({ pathname: window.location.pathname });
    }
};
window.onNavigateToPage = onNavigateToPage;
const Header = (params) => createComponent(`
  <header class="header">
    <span class="logo">${params.siteName}</span>
    <a data-href="/index" onClick="onNavigateToPage(event)">Home</a>
    <a data-href="/contacts" onClick="onNavigateToPage(event)">Contacts</a>
  </header>
`);
const onChangeName = (event) => {
    if (event.target) {
        const value = event.target.value;
        model.update({ siteName: value });
    }
};
window.onChangeName = onChangeName;
const Main = (params) => createComponent(`
  <main class="content">
    <input class="site-name" placeholder="Site name" value="${params.siteName}" onChange="onChangeName(event)" />
    <h1>My app</h1>
    <p>Some text</p>
    <img src="cat.jpeg" />
  </main>
`);
const Contacts = (params) => createComponent(`
  <main class="contacts">
    <h1>Contacts</h1>
    <p>Some info about site</p>
    <img src="cat-computer.jpeg" />
  </main>
  `);
const render = (rootElement, model) => {
    rootElement.innerHTML = "";
    rootElement.appendChild(Header(model));
    if (model.pathname === "/index") {
        rootElement.appendChild(Main(model));
    }
    else if (model.pathname === "/contacts") {
        rootElement.appendChild(Contacts(model));
    }
    else {
        rootElement.appendChild(Main(model));
    }
};
render(document.querySelector("#app"), model.state);
window.addEventListener("popstate", (event) => {
    model.update({ pathname: window.location.pathname });
});
const unsubscribe = model.subscribe((state) => {
    render(document.querySelector("#app"), state);
});
