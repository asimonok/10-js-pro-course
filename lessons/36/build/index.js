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
const model = new Model({ siteName: "App", pathName: window.location.pathname });
const createComponent = (stringHtml) => {
    const bodyElement = new DOMParser().parseFromString(stringHtml, "text/html").querySelector("body");
    return bodyElement.firstChild;
};
const onNavigateToPage = (event) => {
    if (event.target) {
        const dataset = event.target.dataset;
        window.history.pushState(null, "", dataset.href);
        model.update({ pathName: window.location.pathname });
    }
};
window.onNavigateToPage = onNavigateToPage;
const header = ({ siteName }) => createComponent(`
    <header class="header">
        <span class="logo">${siteName}</span>
        <a href="/home" onclick="onNavigateToPage(event)">Home</a>
        <a href="/contacts" onclick="onNavigateToPage(event)">Contacts</a>
    </header>
`);
const Contacts = (params) => createComponent(`
    <h1> Contacts </h1>
`);
const Home = (params) => createComponent(`
    <h1> Home </h1>
`);
const main = ({ siteName }) => createComponent(`
    <main class="content">
        <input value="${siteName}" placeholder="Site name" onchange="onChangeName(event)" />
        <h1>${siteName}</h1>
        <p>Some text</p>
        <img src="cat.jpeg" />
    </main>
`);
const onChangeName = (event) => {
    if (event.target) {
        const value = event.target.value;
        model.update({ siteName: value });
    }
};
window.onChangeName = onChangeName;
const render = (rootElement, model) => {
    rootElement.innerHTML = "";
    rootElement.appendChild(header(model));
    rootElement.appendChild(main(model));
    if (model.pathName === "/home") {
        rootElement.appendChild(Home(model));
    }
    if (model.pathName === "/contacts") {
        rootElement.appendChild(Contacts(model));
    }
};
render(document.querySelector("#app"), model.state);
const subscribeRender = model.subscribe((state) => {
    render(document.querySelector("#app"), state);
});
window.addEventListener("popstate", (event) => {
    model.update({ pathName: window.location.pathname });
});
