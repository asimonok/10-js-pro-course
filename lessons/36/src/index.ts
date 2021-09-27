const siteNameElement = document.querySelector<HTMLInputElement>('.site-name');
const logoElement = document.querySelector('.logo');

if (siteNameElement) {
  siteNameElement.addEventListener('input', (event) => {
    if (event.target && logoElement) {
      logoElement.textContent = (event.target as HTMLInputElement).value;
    }
  });
}

const createComponent = (stringHtml: string): ChildNode => {
  const bodyElement = new DOMParser()
    .parseFromString(stringHtml, 'text/html')
    .querySelector('body') as HTMLBodyElement;
  return bodyElement.firstChild as ChildNode;
};

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
    siteName: 'One-Page-App',
    pathname: window.location.pathname,
  });
  
  const changeName = (event: Event) => {
    if (event.target) {
      const value = (event.target as HTMLInputElement).value;
      model.update({ siteName: value });
    }
  };
  
  window.onChangeName = changeName;
  
  const onNavigateToPage = (event: Event) => {
    event.preventDefault();
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
      <a href="/home" onclick="onNavigateToPage(event)">Home</a>
      <a href="/contacts" onclick="onNavigateToPage(event)">Contacts</a>
    </header>
  `);
  
  const Main = (params: State) =>
    createComponent(`
    <main class="content">
      <input class="site-name" placeholder="Change site name" onChange="changeName(event)"/>
      <h1>My application</h1>
      <p>Some text</p>
      <img src="cat.jpeg" />
    </main>
  `);
  
  const Contacts = (params: State) =>
    createComponent(`
    <main class="contacts">
      <h1>Contacts</h1>
      <p>Some info about site</p>
      <img src="cat-computer.jpeg" />
    </main>
  `);
  
  const render = (rootElement: HTMLElement, model: State): void => {
    rootElement.innerHTML = '';
    rootElement.appendChild(Header(model));
    if (model.pathname === '/home') {
      rootElement.appendChild(Main(model));
    }
    if (model.pathname === '/contacts') {
      rootElement.appendChild(Contacts(model));
    }
  };
  
  render(document.querySelector('#root') as HTMLBodyElement, model.state);
  
  window.addEventListener('popstate', (event: PopStateEvent) => {
    model.update({ pathname: window.location.pathname });
  });
  
  const unsubscribe = model.subscribe((state) => {
    render(document.querySelector('#root') as HTMLBodyElement, state);
  });