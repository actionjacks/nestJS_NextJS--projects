import { render } from './AppLoader';
import './styles/global-styles.scss';

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

export {};
