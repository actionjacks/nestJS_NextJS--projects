/**
 * Pomocniczy obiekt na cele przykładu.
 * Symuluje stan naszego konta w różnych walutach.
 */
const fakeBalanceApi = {
  payPal: 50,
  bankAccount: 200,
  /* Wiedzieliście, że tak również można zapisywać liczby w JS? 😉 */
  bitcoin: 1_000,
  dogecoin: 10_000_000,
};

/**
 * Klasa tworząca obiekt obsługujący, tj. "ogniwo łańcucha".
 * Właściwe obiekty będą rozszerzały tę właśnie klasę.
 */
class Account {
  /**
   * Metoda służąca do "połączenia" obecnego obiektu
   * ("ogniwa") z kolejnym obiektem w łańcuchu.
   */
  setNextHandler(nextObj) {}

  /**
   * Domyślne zachowanie w przypadku, gdy żaden z
   * elementów łańcucha nie jest w stanie obsłużyć
   * żądania.
   */
  handlePayment(req) {
    const { amount } = req.getRequest();
    console.log(`Can't handle ${amount}$ 😞`);
  }
}

/**
 * Klasa tworząca nowe żądanie - punk wejściowy
 * do łańcucha.
 */
class Request {
  constructor(request) {
    this.request = request;
    this.nextObj = new Account();
  }

  /**
   * Metoda zwracająca aktualnie przetwarzane żądanie.
   */
  getRequest() {
    return this.request;
  }
}

/**
 * Poniżej znajdują się klasy tworzące obiekty
 * obsługujące. Rozszerzają klasę "Account".
 */

class PayPal extends Account {
  constructor() {
    super();
    /**
     * Inicjalizacja zmiennej "nextObj", czyli kolejnego
     * obiektu w łańcuchu.
     */
    this.nextObj = new Account();
  }

  setNextHandler(nextObj) {
    this.nextObj = nextObj;
  }

  handlePayment(req) {
    const { useVirtual, amount } = req.getRequest();
    if (!useVirtual && amount < fakeBalanceApi.payPal) {
      /* Obiekt potrafi obsłużyć żądanie, więc przystępuje do pracy. */
      console.log(`Handle ${amount}$ with PayPall 💳`);
    } else {
      /* Przekazanie żądania do kolejnego obiektu. */
      this.nextObj.handlePayment(req);
    }
  }
}

class BankAccount extends Account {
  constructor() {
    super();
    this.nextObj = new Account();
  }

  setNextHandler(nextObj) {
    this.nextObj = nextObj;
  }

  handlePayment(req) {
    const { useVirtual, amount } = req.getRequest();
    if (!useVirtual && amount < fakeBalanceApi.bankAccount) {
      console.log(`Handle ${amount}$ with Bank account 💰`);
    } else {
      this.nextObj.handlePayment(req);
    }
  }
}

class Bitcoin extends Account {
  constructor() {
    super();
    this.nextObj = new Account();
  }

  setNextHandler(nextObj) {
    this.nextObj = nextObj;
  }

  handlePayment(req) {
    const { useVirtual, amount } = req.getRequest();
    if (useVirtual && amount < fakeBalanceApi.bitcoin) {
      console.log(`Handle ${amount}$ with Bitcoin 💲`);
    } else {
      this.nextObj.handlePayment(req);
    }
  }
}

class Dogecoin extends Account {
  constructor() {
    super();
    this.nextObj = new Account();
  }

  setNextHandler(nextObj) {
    this.nextObj = nextObj;
  }

  handlePayment(req) {
    const { useVirtual, amount } = req.getRequest();
    if (useVirtual && amount < fakeBalanceApi.dogecoin) {
      console.log(`Handle ${amount}$ with Dogecoin 🐶`);
    } else {
      this.nextObj.handlePayment(req);
    }
  }
}

/**
 * Utworzenie pojedynczych elementów łańcucha
 * (obiektów obsługujących)
 */
const h1 = new PayPal();
const h2 = new BankAccount();
const h3 = new Bitcoin();
const h4 = new Dogecoin();

/**
 * Tworzymy łańcuch zobowiązań z powyższych obiektów:
 * request ➡ h1 ➡ h2 ➡ h3 ➡ h4 ➡ h5
 * Łańcuch ten może wyglądać różnie w zależności od
 * aktualnych wymagań.
 */

h1.setNextHandler(h2);
h2.setNextHandler(h3);
h3.setNextHandler(h4);

/* Testowanie łańcuchów */

h1.handlePayment(new Request({ amount: 10, useVirtual: false }));
h1.handlePayment(new Request({ amount: 100, useVirtual: false }));
h1.handlePayment(new Request({ amount: 100, useVirtual: true }));
h1.handlePayment(new Request({ amount: 10_00, useVirtual: true }));
h1.handlePayment(new Request({ amount: 100_000_000, useVirtual: false }));
h1.handlePayment(new Request({ amount: 100, useVirtual: false }));
h1.handlePayment(new Request({ amount: 100_000_000, useVirtual: true }));

/* Łańcuchów nie musimy uruchamiać od samego początku */

h3.handlePayment(new Request({ amount: 100, useVirtual: true }));
h3.handlePayment(new Request({ amount: 100, useVirtual: false }));
