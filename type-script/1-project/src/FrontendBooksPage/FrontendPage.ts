import { Basket } from '../Basket/Basket';
import { Router } from '../Router/Router';
import { ProductPages } from '../ProductPage/ProductPage';
import { FrontendBook } from '../types/FrontendBook';

class FrontendBooksPage extends ProductPages<FrontendBook> {
  protected readonly products: FrontendBook[] = [
    { id: 'fe-001', name: 'super-frontend', price: 5 },
  ];

  public constructor(containerId: string, listingName: string, router: Router, basket: Basket) {
    super(containerId, listingName, router, basket);
  }

  protected readonly productTemplate = ({ id, name, price }: FrontendBook): HTMLElement => {
    const element = document.createElement('article');
    const titleElement = document.createElement('p');
    const priceElement = document.createElement('p');
    const formElement = document.createElement('form');

    formElement.innerHTML = `
    <label>
      ilosc
      <input id="product-${id}" type="number" required value="0" />
    </label>
    <button type="submit">Dodaj do koszyka</button>
    `.trim();

    titleElement.textContent = name;
    priceElement.textContent = price.toFixed(2);

    formElement.addEventListener('submit', () => {
      const input = formElement.querySelector(`#product-${id}`) as HTMLInputElement;
      const quantity = Number(input.value);
      this.basket.addToBasket({
        id,
        name,
        price,
        quantity,
      });
      input.value = '0';
    });

    element.appendChild(titleElement);
    element.appendChild(priceElement);
    element.appendChild(formElement);
    return element;
  };
}

export { FrontendBooksPage };
