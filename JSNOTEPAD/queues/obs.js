class Queue {
  constructor() {
    this.items = [];
    this.observer = new Observable(); // Tworzymy instancję Obserwatora
  }

  enqueue(item) {
    this.items.push(item);
    this.observer.notify(item); // Wywołujemy obserwatora przy dodawaniu elementu
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Kolejka jest pusta";
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "Kolejka jest pusta";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  // Dodajemy obserwatora, który nasłuchuje na zmiany w kolejce
  addObserver(observer) {
    this.observer.subscribe(observer);
  }
}

// Przykład użycia
const myQueue = new Queue();

// Dodajemy obserwatora
myQueue.addObserver((item) => {
  console.log(`Nowy element dodany do kolejki: ${item}`);
});

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log("Element na początku kolejki:", myQueue.front());
console.log("Rozmiar kolejki:", myQueue.size());

myQueue.dequeue();
console.log("Element po zdjęciu z kolejki:", myQueue.front());
