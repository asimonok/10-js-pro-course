const siteNameElement = document.querySelector<HTMLInputElement>(".site-name");
const logoElement = document.querySelector(".logo");

if (siteNameElement) {
  siteNameElement.addEventListener("input", (event) => {
    if (event.target && logoElement) {
      logoElement.textContent = (event.target as HTMLInputElement).value;
    }
  });
}

// function for creating html components
const createComponent = (stringHtml: string): ChildNode => {
  const bodyElement = new DOMParser().parseFromString(stringHtml, "text/html").querySelector("body") as HTMLBodyElement;
  return bodyElement.firstChild as ChildNode;
};

// create header component
const header = createComponent(`
    <header class="header">
        <span class="logo"></span>
        <a href="/index">Home</a>
        <a href="/contacts">Contacts</a>
    </header>
`);

// create main component
const main = createComponent(`
    <main class="content">
        <input class="site-name" placeholder="Site name" />
        <h1>My app</h1>
        <p>Some text</p>
        <img src="cat.jpeg" />
    </main>
`);

// function for render component
const render = (rootElement: HTMLElement): void => {
  rootElement.innerHTML = "";

  rootElement.append(header);
  rootElement.append(main);
};

// call reander fun on app div
render(document.querySelector("#app") as HTMLBodyElement);
