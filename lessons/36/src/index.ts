// const siteNameElement = document.querySelector<HTMLInputElement>('.site-name');
// const logoElement = document.querySelector('.logo');

// if (siteNameElement) {
//     siteNameElement.addEventListener('input', (event) => {
//         if (event.target && logoElement) {
//             logoElement.textContent = (event.target as HTMLInputElement).value;
//         }
//     })
// }

// const createComponent = (stringHtml: string) => {
//     const bodyElement = new DOMParser().parseFromString(stringHtml,  'text/html').querySelector('body');
//     if (bodyElement) {
//         return bodyElement.firstChild;
//     }
// }

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

const model = new Model({ siteName: "", pathname: window.location.pathname });

const createComponent = (stringHtml: string): ChildNode => {
  const bodyElement = new DOMParser()
    .parseFromString(stringHtml, "text/html")
    .querySelector("body") as HTMLBodyElement;
  return bodyElement.firstChild as ChildNode;
};

const onNavigateToPage = (event: Event) => {
  if (event.target) {
    const dataset = (event.target as HTMLButtonElement).dataset as {
      href: string;
    };
    window.history.pushState(null, dataset.href, dataset.href);
    model.update({ pathname: window.location.pathname });
  }
};

window.onNavigateToPage = onNavigateToPage;

const Header = ({ siteName }: State) =>
  createComponent(`
  <header class="header">
    <span class="logo">${siteName}</span>
    <a data-href="/index" onClick="onNavigateToPage(event)">Home</a>
    <a data-href="/contacts">Contacts</a>
  </header>
`);

const onChangeName = (event: Event) => {
  if (event.target) {
    const value = (event.target as HTMLInputElement).value;
    model.update({ siteName: value });
  }
};

window.onChangeName = onChangeName;

const Main = (params: State) =>
  createComponent(`
  <main class="content">
    <input class="site-name" placeholder="Site name" value="${params.siteName}" onChange="onChangeName(event)" />
    <h1>My app</h1>
    <p>Some text</p>
    <img src="cat.jpeg" />
  </main>
`);
