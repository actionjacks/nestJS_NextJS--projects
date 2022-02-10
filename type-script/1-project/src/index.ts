import { render } from './AppLoader';
import { BasketStorage } from './storage-localstorage/BasketStorage';
import './styles/global-styles.scss';

declare global {
  interface Window {
    basket: BasketStorage;
  }
}

const element: HTMLElement | null = document.getElementById('root-element');
if (element) {
  render(element);
}

const redirectFunction = (location: string): void => {
  window.location.hash = `#/${location}`;
};

const frontendButton = document.getElementById('fe-button');
if (frontendButton) {
  frontendButton.addEventListener('click', () => {
    redirectFunction('frontend');
  });
}

const backendButton = document.getElementById('be-button');
if (backendButton) {
  backendButton.addEventListener('click', () => {
    redirectFunction('backend');
  });
}

const storage = new BasketStorage();

window.basket = storage;

export {};
