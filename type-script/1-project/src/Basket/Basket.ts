import { BasketProduct } from '../types/BasketProduct';
import { Storage } from '../storage-localstorage/Storage';

export class Basket {
  private static readonly BASKET_CLASS = 'basket';
  private static readonly BASKET_POPUP_CLASS = 'basket--popup';
  private static readonly PRODUCT_LIST_CLASS = 'basket--list';
  private static readonly PRODUCT_LIST_ITEM_CLASS = 'basket--list_item';
  private static readonly OPEN_POPUP_CLASS = 'basket--open';

  private readonly rootElement: HTMLDivElement;
  private readonly products: BasketProduct[] = [];
  private basketProductList!: HTMLUListElement;
  private readonly storage: Storage<BasketProduct>;

  public constructor(containerId: string, storage: Storage<BasketProduct>) {
    const basketElement = document.getElementById(containerId);

    if (basketElement) {
      this.rootElement = basketElement as HTMLDivElement;
      this.attachBasketToDOM();
      this.storage = storage;
      this.products = storage.getItems();
      return;
    }
    throw Error('no div element {Baske}');
  }

  private attachBasketToDOM() {
    this.rootElement.classList.add(Basket.BASKET_CLASS);
    this.appendBasketButton();
    this.appendBasketPopup();
  }

  private refreshBasketData() {
    while (this.basketProductList.firstChild) {
      this.basketProductList.firstChild.remove();
    }

    this.products.forEach(this.createListElement);
  }

  private readonly createListElement = (product: BasketProduct): void => {
    const listElement = document.createElement('li');
    const productInfoElement = document.createElement('p');
    const incraseButton = document.createElement('button');
    const decraseButton = document.createElement('button');

    productInfoElement.textContent = `${product.name} ilosc ${product.quantity}`;
    incraseButton.textContent = '+';
    decraseButton.textContent = '-';

    listElement.classList.add(Basket.PRODUCT_LIST_ITEM_CLASS);
    incraseButton.addEventListener('click', () => this.incraseQuantity(product.id));
    decraseButton.addEventListener('click', () => this.decreaseQuantity(product.id));

    listElement.appendChild(productInfoElement);
    listElement.appendChild(incraseButton);
    listElement.appendChild(decraseButton);
    this.basketProductList.appendChild(listElement);
  };

  private appendBasketButton(): void {
    const basketButton = document.createElement('button');
    const basketIcon = document.createElement('span');

    basketIcon.textContent = 'BASKET';
    basketButton.addEventListener('click', () => {
      if (!this.rootElement.classList.contains(Basket.OPEN_POPUP_CLASS)) {
        this.refreshBasketData();
      }

      this.rootElement.classList.toggle(Basket.OPEN_POPUP_CLASS);
    });
    basketButton.appendChild(basketIcon);
    this.rootElement.appendChild(basketButton);
  }

  public addToBasket(product: BasketProduct): void {
    if (this.isProductAlreadyInBasket(product.id)) {
      this.changeProductQuantity(product.id, product.quantity);
    } else {
      this.products.push(product);
      this.refreshBasketData();
    }

    this.storage.saveItems(this.products);
  }

  public incraseQuantity(id: string): void {
    this.changeProductQuantity(id, 1);
    this.storage.saveItems(this.products);
  }

  public decreaseQuantity(id: string): void {
    this.changeProductQuantity(id, -1);
    this.storage.saveItems(this.products);
  }

  private isProductAlreadyInBasket(id: string): boolean {
    return this.products.some(product => product.id === id);
  }

  private changeProductQuantity(id: string, numQuantity: number): void {
    let indexProductToRemove: number | null = null;

    this.products.forEach((product, index) => {
      if (product.id !== id) {
        return;
      }
      product.quantity += numQuantity;
      if (product.quantity === 0) {
        indexProductToRemove = index;
      }
    });

    if (indexProductToRemove !== null) {
      this.products.splice(indexProductToRemove, 1);
    }
    this.refreshBasketData();
  }

  appendBasketPopup(): void {
    const popupContainer = document.createElement('div');
    const productList = document.createElement('ul');

    popupContainer.classList.add(Basket.BASKET_POPUP_CLASS);
    productList.classList.add(Basket.PRODUCT_LIST_CLASS);

    this.basketProductList = productList;
    popupContainer.appendChild(productList);
    this.rootElement.appendChild(popupContainer);
  }
}
