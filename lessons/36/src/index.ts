interface State {
  siteName: string;
  pathName: string;
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

const model = new Model({ siteName: "App", pathName: window.location.pathname });

// function for creating html components
const createComponent = (stringHtml: string): ChildNode => {
  const bodyElement = new DOMParser().parseFromString(stringHtml, "text/html").querySelector("body") as HTMLBodyElement;
  return bodyElement.firstChild as ChildNode;
};

const onNavigateToPage = (event: Event) => {
  if (event.target) {
    const dataset = (event.target as HTMLButtonElement).dataset as { href: string };
    window.history.pushState(null, dataset.href, dataset.href);
    model.update({ pathName: window.location.pathname });
  }
};

window.onNavigateToPage = onNavigateToPage;

// create header component
const header = ({ siteName }: State) =>
  createComponent(`
    <header class="header">
        <span class="logo">${siteName}</span>
        <a href="/home" onclick="onNavigateToPage(event)">Home</a>
        <a href="/contacts" onclick="onNavigateToPage(event)">Contacts</a>
    </header>
`);

const Contacts = (params: State) =>
  createComponent(`
    <h1> Contacts </h1>
`);

const Home = (params: State) =>
  createComponent(`
    <h1> Home </h1>
`);

// const model: State = {
//   siteName: "App",
// };

// create main component
const main = ({ siteName }: State) =>
  createComponent(`
    <main class="content">
        <input value="${siteName}" placeholder="Site name" onchange="onChangeName(event)" />
        <h1>${siteName}</h1>
        <p>Some text</p>
        <img src="cat.jpeg" />
    </main>
`);

const onChangeName = (event: Event) => {
  if (event.target) {
    const value = (event.target as HTMLInputElement).value;
    model.update({ siteName: value });
    console.log(model.state);
  }
};

window.onChangeName = onChangeName;

// function for render component
const render = (rootElement: HTMLElement, model: State): void => {
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

// call reander fun on app div
render(document.querySelector("#app") as HTMLBodyElement, model.state);

const subscribeRender = model.subscribe((state) => {
  render(document.querySelector("#app") as HTMLBodyElement, state);
});

// const siteNameElement = document.querySelector<HTMLInputElement>(".site-name");
// const logoElement = document.querySelector(".logo");

// if (siteNameElement) {
//   siteNameElement.addEventListener("input", (event) => {
//     if (event.target && logoElement) {
//       logoElement.textContent = (event.target as HTMLInputElement).value;
//     }
//   });
// }

window.addEventListener("popstate", (event: PopStateEvent) => {
  model.update({ pathName: window.location.pathname });
});

// window.history.pushState(null, "Page 1", "/page1");
// window.history.pushState(null, "Page 2", "/page2");
