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
    }

    subscribe (callback: (state: State) => void) {
        const subscriber = (state: State) => callback(state);
        this.subscribers.push(subscriber);
        return () => {
            this.subscribers = this.subscribers.filter((item) => item !== subscriber);
        }
    }
}

const model = new Model({siteName: 'My app'})

interface State {
    siteName: string;
}

const createComponent = (stringHtml: string): ChildNode => {
    const bodyElement = new DOMParser().parseFromString(stringHtml, 'text/html').querySelector('body') as HTMLBodyElement;
        return bodyElement.firstChild as ChildNode;
}

const Header = ({siteName}: State) => createComponent( 
    `<header class="header">
    <span class="logo">${siteName}</span>
    <a href="/index">Home</a>
    <a href="/contacts">Contacts</a>
    </header>`
)

// instead of controller make simple function
const onChangeName = (event: Event) => {
    if(event.target) {
        const value = (event.target as HTMLInputElement).value;
        model.update({siteName: value})
        console.log(value);
        console.log(model.state);
    }
};
declare interface Window {
    onChangeName: (event: Event) => void;
}
window.onChangeName = onChangeName;

const Main = ({siteName}: State) => createComponent( 
    `<main class="content">
    <input class="site-name" placeholder="Site name" onchange="onChangeName(event)" />
    <h1>My app</h1>
    <p>Some text</p>
    <img src="cat.jpeg" />
    </main>
   `
);



const render = (rootElement: HTMLElement, model: State): void => {
    rootElement.innerHTML = ''; //clear root first
    rootElement.appendChild(Header(model));  
    rootElement.appendChild(Main(model));
}

render(
    document.querySelector('#app') as HTMLElement, 
    model.state
);


model.update({siteName: '1we'});
model.update({siteName: '235'});


const unsubscribe = model.subscribe( (state: State) => {
    render(
        document.querySelector('#app') as HTMLElement, 
        state
    );
});




// model.update({siteName: '1we'});
// model.update({siteName: '235'});
// // unsubscribe();
// model.update({siteName: '1we'});


// console.log('subscribers: ',model.subscribers);

// console.log('subscribers: ',model.subscribers);

