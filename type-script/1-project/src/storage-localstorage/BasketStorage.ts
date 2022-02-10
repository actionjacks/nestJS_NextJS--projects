import { LocalStorage } from './LocalStorage';
import { BasketProduct } from '../types/BasketProduct';

export class BasketStorage extends LocalStorage<BasketProduct> {
  private static readonly BASKET_KEY = 'BasketStorage';

  public constructor() {
    super(BasketStorage.BASKET_KEY);
  }
}
