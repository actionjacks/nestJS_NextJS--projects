/* Tworzymy Fabrykę dla pojazdów */

class FabrykaPojazdow {
  constructor(opcje) {
    let pojazd;
    switch (opcje.rodzaj) {
      case "osobowy":
        pojazd = new Osobowy(opcje.kolor, opcje.skrzynia, opcje.drzwi);
        break;
      case "bus":
        pojazd = new Bus(opcje.kolor, opcje.skrzynia, opcje.fotele);
        break;
    }
    return pojazd;
  }
}

/* Klasy, które będą "produkowały" właściwy pojazd */

class Osobowy {
  constructor(kolor, skrzynia, drzwi) {
    this.kolor = kolor;
    this.skrzynia = skrzynia;
    this.drzwi = drzwi;
  }

  produkuj() {
    return `Wyprodukuj samochód osobowy`;
  }
}


class Bus {
  constructor(kolor, skrzynia, fotele) {
    this.kolor = kolor;
    this.skrzynia = skrzynia;
    this.fotele = fotele;
  }

  produkuj() {
    return `Wyprodukuj busa`;
  }
}

/* Użycie Fabryki - ponownie mamy jeden spójny interfejs dla każdego pojazdu */

let zamowienie1 = {
  rodzaj: "osobowy",
  kolor: "biały",
  skrzynia: "automatyczna",
  drzwi: 4,
};

let zamowienie2 = {
  rodzaj: "bus",
  kolor: "srebrny",
  skrzynia: "manualna",
  fotele: 6,
};

let pojazd1 = new FabrykaPojazdow(zamowienie1);
let pojazd2 = new FabrykaPojazdow(zamowienie2);
