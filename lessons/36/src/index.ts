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

const Logo = createComponent(`
<span class="logo"></span>
`);

const Home = createComponent(`
<a href="/index">Home</a>
`);

const Contacts = createComponent(`
<a href="/contacts">Contacts</a>
`);

const renderHeader = (rootElement: HTMLElement): void => {
  rootElement.innerHTML = '';
  rootElement.appendChild(Logo);
  rootElement.appendChild(Home);
  rootElement.appendChild(Contacts);
};

renderHeader(document.querySelector('.header') as HTMLBodyElement);

const Form = createComponent(`
<input class="site-name" placeholder="Site name" />
`);

const MyApp = createComponent(`
<h1>My app</h1>
`);

const MainContent = createComponent(`
<p>Some text</p>
`);

const MainImg = createComponent(`
<img src="cat.jpeg" />
`);

const renderMain = (rootElement: HTMLElement): void => {
  rootElement.innerHTML = '';
  rootElement.appendChild(Form);
  rootElement.appendChild(MyApp);
  rootElement.appendChild(MainContent);
  rootElement.appendChild(MainImg);
};

renderMain(document.querySelector('.content') as HTMLBodyElement);
