import { Product } from '../types/Products';
import { Router } from '../Router/Router';
import { Basket } from '../Basket/Basket';

abstract class ProductPages<T extends Product> {
  private readonly rootElement!: HTMLDivElement;
  protected abstract readonly products: T[];
  protected abstract readonly productTemplate: (product: T) => HTMLElement;

  public constructor(
    containerId: string,
    listingName: string,
    private readonly router: Router,
    protected readonly basket: Basket,
  ) {
    const containerElement = document.getElementById(containerId);
    if (!containerId) {
      return;
    }

    this.router.addRoute({ name: listingName, renderFunction: this.render });
    this.rootElement = containerElement as HTMLDivElement;
  }

  public render = (): void => {
    while (this.rootElement.firstChild) {
      this.rootElement.firstChild.remove();
    }
    const productBox = this.products.map(this.productTemplate);

    productBox.forEach(product => {
      this.rootElement.appendChild(product);
    });
  };
}

export { ProductPages };
