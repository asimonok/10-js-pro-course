const siteNameElement = document.querySelector<HTMLInputElement>('.site-name');
const logoElement = document.querySelector('.logo');

const createComponent = (stringHtml: string): ChildNode => {
    const bodyElement = new DOMParser().parseFromString(stringHtml,  'text/html').querySelector('body') as HTMLBodyElement;
        return bodyElement.firstChild as ChildNode;
};

interface State {
    siteName: string;
}

declare interface Window {
    onChangeName: (event: Event) => void;
}

const model: State = {
    siteName: 'my app',
}; 

const Header = ({siteName: State}) => createComponent( 
    `
    <header class="header">
    <span class="logo">${siteName}</span>
    <a href="/index">Home</a>
    <a href="/contacts">Contacts</a>
    </header>`
)
const Main = (params: State ) createComponent( 
    `<main class="content">
    <input class="site-name" placeholder="Site name" />
    <h1>My app</h1>
    <p>Some text</p>
    <img src="cat.jpeg" />
    </main>
   `
);

const onChangeName = (event: Event) => {
    if(event.target) {
        const value = (event.target as HTMLInputElement).value;
    }
};

window.onChangeName = onChangeName;








const render = (rootElement: HTMLElement): void => {
    rootElement.innerHTML = ''; //clear root first
    rootElement.appendChild(Header(model));  
    rootElement.appendChild(Main(model));
} 

render(
    document.querySelector('#app') as HTMLElement,
);



// if (siteNameElement) {
//     siteNameElement.addEventListener('input', (event) => {
//         if (event.target && logoElement) {
//             logoElement.textContent = (event.target as HTMLInputElement).value;
//         }
//     })
// }