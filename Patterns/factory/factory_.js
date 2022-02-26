/* -- Tworzymy fabrykę w celu obsługi różnego rodzaju zamówień -- */

function fabrykaZamowien(nadanie, odbior, przesylka) {
  /* Implementujemy logikę do wyboru właściwego środka transportu. 
     Tutaj dla ułatwienia decydujemy tylko na podstawie odległości */

  const odleglosc = liczOdleglosc();

  if (odleglosc > 10 && odleglosc < 50) {
    return new ZamowienieSamochod(nadanie, odbior, przesylka);
  }
  if (odleglosc > 50) {
    return new ZamowienieBus(nadanie, odbior, przesylka);
  }
  return new ZamowienieRower(nadanie, odbior, przesylka);
}

/* Klasy, które będą właściwymi twórcami obiektów */

class ZamowienieSamochod {
  constructor(nadanie, odbior, przesylka) {
    this.nadanie = nadanie;
    this.odbior = odbior;
    this.przesylka = przesylka;
  }
  // Pozostała logika - wszystko co związane z obsłużeniem przesyłki samochodem
}

class ZamowienieBus {
  constructor(nadanie, odbior, przesylka) {
    this.nadanie = nadanie;
    this.odbior = odbior;
    this.przesylka = przesylka;
  }
  // Pozostała logika - wszystko co związane z obsłużeniem przesyłki busem
}

class ZamowienieRower {
  constructor(nadanie, odbior, przesylka) {
    this.nadanie = nadanie;
    this.odbior = odbior;
    this.przesylka = przesylka;
  }
  // Pozostała logika - wszystko co związane z obsłużeniem przesyłki rowerem
}

/* Przesyłkę tworzymy zawsze w ten sam sposób (za pomocą tego samego interfejsu).
   To fabryka jest odpowiedzialna za odpowienie przygotowanie zamówienia.
   Dodanie nowej metody dostawy nie popsuje i nie spowoduje konieczności edycji poniższego kodu. */

const zamowienie1 = new fabrykaZamowien(
  "ul. Marszałkowska 10, Warszawa",
  "ul. Sabały 10/12, Warszawa",
  "List A4"
);

const zamowienie2 = new fabrykaZamowien(
  "ul. Marszałkowska 10, Warszawa",
  "ul. Szkolna, Gdańsk",
  "Paczka 50x50"
);

const zamowienie3 = new fabrykaZamowien(
  "ul. Długa 1, Płock",
  "ul. Słowackiego 15, Gąbin",
  "Paczka 20x20"
);
