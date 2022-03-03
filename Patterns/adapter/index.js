// Stary interfejs do wyliczania ceny
function TicketPrice() {
  this.calcPrice = function (city, day) {
    // wyliczamy cenę biletu
    return 30;
  };
}

// Nowy interfejs do wyliczania ceny
class TicketPriceV2 {
  constructor() {
    this.city = (city) => {
      /* ustalmy miasto */
    };
    this.day = (day) => {
      /* ustalmy dzień tygodnia */
    };
    this.age = (age) => {
      /* ustalmy wiek, może będzie zniżka */
    };
    this.calculate = () => {
      /* wyliczamy po nowemu cenę i doliczamy zniżki */
      return 18;
    };
  }
}

// Adapter do integracji obecnych klientów z nowym interfejsem
// "Wiek" jest nową rzeczą, więc musimy go przekazać
function PriceAdapter(age) {
  // korzystamy tutaj już z nowego interfejsu
  let newPricing = new TicketPriceV2();
  newPricing.age(age);
  // zwracamy metodę z tymi samymi argumentami i nazwą
  // jakie były w starym interfejsie,
  // w celu zapewnienia kompatybilności...
  return {
    calcPrice: (city, day) => {
      newPricing.city(city); // ...ale operujemy na nowym interfejsie
      newPricing.day(day);
      return newPricing.calculate();
    },
  };
}

// Użycie przed wprowadzeniem nowego interfejsu - stare API:
const oldPricing = new TicketPrice();
let price = oldPricing.calcPrice("Warsaw", "Wednesday");
console.log(price); // 30

// Użycie nowego interfejsu poprzez zastosowanie adaptera - nowe API
const adapter = new PriceAdapter(12);
// wywołanie identyczne jak w przypadku starego API (linia 41)
let price_new = adapter.calcPrice("Warsaw", "wednesday");
console.log(price_new); // 18
