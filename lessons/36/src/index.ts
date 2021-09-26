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
