import { Product } from './Products';

export type BasketProduct = {
  quantity: number;
} & Product;
 