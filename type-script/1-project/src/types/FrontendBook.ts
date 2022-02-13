import { Product } from './Products';

type BackendLanguage = 'JS' | 'c#';

type FrontendBook = Product;

type BackendBook = {
  backendLanguage: BackendLanguage;
} & Product;

export type { FrontendBook, BackendBook };
