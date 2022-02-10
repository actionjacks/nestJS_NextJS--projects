import { Storage } from './Storage';

export class LocalStorage<T> extends Storage<T> {
  public constructor(storageKey: string) {
    super(storageKey);
  }
  public clearItems() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify([]));
  }

  public getItems(): T[] {
    const jsonItems = localStorage.getItem(this.STORAGE_KEY) as string;
    const items = JSON.parse(jsonItems) as T[];
    return items;
  }

  public saveItems(products: T[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(products));
  }

  init() {
    if (!localStorage.getItem(this.STORAGE_KEY)) {
      this.clearItems();
    }
  }
}
