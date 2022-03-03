/**
 * Interfejs polecenia. Tak jak wspomniałem już we wcześniejszym
 * przykładzie, metodę wywołującą polecenie zazwyczaj nazywamy "execute".
 */
interface Command {
  execute(): void;
}

/**
 * Proste polecenie nie musi wymagać odwołań do zewnętrznych serwisów i
 * może być bezpośrednio obsłużone.
 */
class OrderDrik implements Command {
  private drinkName: string;

  constructor(drinkName: string) {
    this.drinkName = drinkName;
  }

  public execute() {
    console.log(`Here is your ${this.drinkName} drink`);
  }
}

/**
 * Bardziej skomplikowane polecenia mogą odwoływać się do zewnętrznych
 * serwisów, tzw. odbiorców. To do nich zostanie przesłane polecenie.
 */
class OrderFood implements Command {
  private receiver: Receiver;
  private meal: string;

  /**
   * Odbiorcę polecenia możemy przekazać podczas tworzenia klasy, wtedy
   * nasz kod będzie bardziej uniwersalny.
   */
  constructor(receiver: Receiver, meal: string) {
    this.receiver = receiver;
    this.meal = meal;
  }

  /**
   * Wywołanie metody dostępnej na odbiorcy i przekazanie ewentualnych
   * parametrów.
   */
  public execute() {
    this.receiver.cookMeal(this.meal);
  }
}

/**
 * Odbiorca ma wiedzę o tym jak poradzić sobie z danym poleceniem.
 * Tutaj również często trafia logika biznesowa.
 */
class Receiver {
  public cookMeal(meal: string): void {
    console.log(`Creating a ${meal} for you!`);
  }
}

/**
 * Pośrednik wywołujący metody może być w stanie obsługiwać
 * wiele różnych poleceń.
 */
class Invoker {
  /**
   * Invoker nie jest zależny ani od polecenia ani od wykonawcy.
   * Przekazuje on jedynie polecenie do odbiorcy (poprzez wywołanie metody).
   */
  public takeMealOrder(order: OrderFood): void {
    order.execute();
  }

  public takeDrinkOrder(order: OrderDrik): void {
    order.execute();
  }
}

/**
 * Klient "wydając" polecenie komunikuje się jedynie z pośrednikiem.
 */
class Client {
  private invoker: Invoker;
  private receiver: Receiver;

  constructor(invoker: Invoker, receiver: Receiver) {
    this.invoker = invoker;
    this.receiver = receiver;
  }

  makeOrder(meal?: string, drink?: string) {
    if (meal) {
      const orderFood = new OrderFood(this.receiver, meal);
      this.invoker.takeMealOrder(orderFood);
    }

    if (drink) {
      const orderDrink = new OrderDrik(drink);
      this.invoker.takeDrinkOrder(orderDrink);
    }
  }
}

/**
 * Wydanie polecenia (złożenie zamówienia) przez klienta:
 */
const invoker = new Invoker();
const receiver = new Receiver();

const client = new Client(invoker, receiver);

client.makeOrder("Pad Thai", "Mango Juice");
client.makeOrder("Curry Soup");
client.makeOrder(undefined, "Coke");

/**
 * Output:
 * "Creating a Pad Thai for you!"
 * "Here is your Mango Juice drink"
 * "Creating a Curry Soup for you!"
 * "Here is your Coke drink"
 */
