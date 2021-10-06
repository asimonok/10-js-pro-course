interface State {
  siteName: string;
  pathname: string;
}

declare interface Window {
  onChangeName: (event: Event) => void;
  onNavigateToPage: (event: Event) => void;
}

class Model {
  state: State;
  subscribers: Array<(state: State) => void>;

  constructor(initialState: State) {
    this.state = initialState;
    this.subscribers = [];
  }

  update(updatedState: Partial<State>) {
    this.state = {
      ...this.state,
      ...updatedState,
    };
    this.subscribers.forEach((callback) => {
      callback(this.state);
    });
  }

  subscribe(callback: (state: State) => void): () => void {
    const subscriber = (state: State) => callback(state);
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

const createComponent = (stringHtml: string): ChildNode => {
  const bodyElement = new DOMParser()
    .parseFromString(stringHtml, "text/html")
    .querySelector("body") as HTMLBodyElement;

  return bodyElement.firstChild as ChildNode;
};

const onNavigateToPage = (event: Event) => {
  event.preventDefault();
  if (event.target) {
    const hrefAttr = (event.target as HTMLElement).getAttribute("href");
    window.history.pushState(null, hrefAttr ?? "", hrefAttr);
    model.update({ pathname: window.location.pathname });
  }
};

window.onNavigateToPage = onNavigateToPage;

const onChangeName = (event: Event) => {
  if (event.target) {
    const value = (event.target as HTMLInputElement).value;
    model.update({ siteName: value });
  }
};

window.onChangeName = onChangeName;

const Header = (params: State) =>
  createComponent(`<header class="header">
  <span class="logo">${params.siteName}</span>
  <a href="/home" onclick="onNavigateToPage(event)">Home</a>
  <a href="/contacts" onclick="onNavigateToPage(event)">Contacts</a>
  </header>`);

const HomePage = (params: State) =>
  createComponent(`<main class="content">
  <input class="site-name" value="${params.siteName}" placeholder="Site name" onChange="onChangeName(event)"/>
  <h1>My app</h1>
  <p>Some text</p>
  <img src="cat.jpeg" />
  </main>`);

const ContactsPage = (params: State) =>
  createComponent(`<main class="contacts">
  <h1>Contacts</h1>
  <p>Some info about site</p>
  <img src="cat-computer.jpeg" />
  </main>`);

const render = (rootElement: HTMLElement, model: State): void => {
  rootElement.innerHTML = " ";

  rootElement.appendChild(Header(model));
  if (model.pathname === "/home" || model.pathname === "/") {
    rootElement.appendChild(HomePage(model));
  }
  if (model.pathname === "/contacts") {
    rootElement.appendChild(ContactsPage(model));
  }
};

render(document.querySelector("#app") as HTMLBodyElement, model.state);

window.addEventListener("popstate", (event) => {
  model.update({ pathname: window.location.pathname });
});

const unsubscribe = model.subscribe((state) => {
  render(document.querySelector("#app") as HTMLBodyElement, state);
});
