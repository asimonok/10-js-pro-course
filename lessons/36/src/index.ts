class Model {
    state: State;
    subscribers: Array<(state: State) => void>;

    constructor(initialState: State) {
        this.state = initialState;
        this.subscribers = []; 
    }

    update (updatedState: Partial<State>) {
        this.state = {
            ...this.state,
            ...updatedState,
        } 
        this.subscribers.forEach( (callback) => {
            callback(this.state);
        })
        // this.pathname = window.location.pathname
    }

    subscribe (callback: (state: State) => void) {
        const subscriber = (state: State) => callback(state);
        this.subscribers.push(subscriber);
        return () => {
            this.subscribers = this.subscribers.filter((item) => item !== subscriber);
        }
    }
}

const model = new Model({
    siteName: 'My app',
    pathname: window.location.pathname,
})

interface State {
    siteName: string;
    pathname: string,
}

const createComponent = (stringHtml: string): ChildNode => {
    const bodyElement = new DOMParser().parseFromString(stringHtml, 'text/html').querySelector('body') as HTMLBodyElement;
        return bodyElement.firstChild as ChildNode;
}

declare interface Window {
    onChangeName: (event: Event) => void;
    onNavigateToPage: (event: Event) => void;
}

// instead of controller make simple function
  const onChangeName = (event: Event) => {
      if(event.target) {
          const value = (event.target as HTMLInputElement).value;
          model.update({siteName: value})
        }
    };

    window.onChangeName = onChangeName;
    
    const onNavigateToPage = (event: Event) => {
        event.preventDefault();
        console.log('clicked')
        console.log(event.target)
        if (event.target) {
          const href = (event.target as HTMLButtonElement).getAttribute('href') || '';
          window.history.pushState(null, href, href);
          model.update({ pathname: window.location.pathname });
        }
    };
   
    window.onNavigateToPage = onNavigateToPage;

const Header = ({ siteName }: State) => createComponent(`
    <header class="header">
      <span class="logo">${siteName}</span>
      <a href="/home" onclick="onNavigateToPage(event)">Home</a>
      <a href="/contacts" onclick="onNavigateToPage(event)">Contacts</a>
    </header>
  `);

const Main = ({siteName}: State) => createComponent( 
    `<main class="content">
    <input class="site-name" placeholder="Site name" onchange="onChangeName(event)" />
    <h1>My app</h1>
    <p>Some text</p>
    <img src="cat.jpeg" />
    </main>
   `
);
const Contacts = ({siteName}: State) => createComponent( 
    `<main class="contacts">
        <h1>Contacts</h1>
            <p>Some info about site</p>
        <img src="cat-computer.jpeg" />
    </main>
   `
);
 

const render = (rootElement: HTMLElement, model: State): void => {
    rootElement.innerHTML = ''; //clear root first
    rootElement.appendChild(Header(model));
    console.log(model);

    if (model.pathname === '/home')   {
        rootElement.appendChild(Main(model));
    }
    if (model.pathname === '/contacts')   {
        rootElement.appendChild(Contacts(model));
    }

}
render(
    document.querySelector('#app') as HTMLElement, 
    model.state
);

window.addEventListener('popstate', (event: PopStateEvent ) => {
    model.update({pathname: window.location.pathname});
});

const unsubscribe = model.subscribe( (state: State) => {
    render(
        document.querySelector('#app') as HTMLElement, 
        state
    );
});








