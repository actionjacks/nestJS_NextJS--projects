import { Document } from 'mongoose';
import { User } from './user';
import { Product } from './product';

interface ProductOrder {
  product: Product;
  quantity: number;
}

export interface Order extends Document {
  owner: any;
  totalPrice: number;
  products: ProductOrder[];
  created: Date;
}
