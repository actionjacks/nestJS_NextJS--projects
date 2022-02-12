import { Router } from './Router/Router';
import { render } from './AppLoader';
import { Basket } from './Basket/Basket';
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

const router = new Router();
const storage = new BasketStorage();
const basket = new Basket('basket', storage);

router.addRoute({ name: 'frontend', renderFunction: () => console.log('frontend') });
router.addRoute({ name: 'backend', renderFunction: () => console.log('backend') });

window.basket = storage;

//test
basket.addToBasket({ id: '1', name: 'test', price: 2, quantity: 2 });

export {};
