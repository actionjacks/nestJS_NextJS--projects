// "Subject" - obiekt który "powiadamia" obiekty o zmianie swojego stanu.
// Robi to wywołując metody należące do "obserwatorów"
class JobsPortal {
  constructor() {
    // o zmianie tego stanu będziemy informować słuchaczy
    this.newJobOffer = {};
    // Subject wie o wszystkich obserwujących go obiektach
    this.observers = [];
  }

  addCandidate(observer) {
    // metoda służąca dodaniu obserwatora
    console.log(`${observer.name}, welcome to our job portal!`);
    this.observers.push(observer);
  }

  removeCandidate(observer) {
    // metoda służąca usunięciu obserwatora
    let index = this.observers.findIndex((o) => o === observer);
    if (index !== -1) {
      console.log(
        `${this.observers[index].name}, good bye and good luck in new job!`
      );
      this.observers.splice(index, 1);
    }
  }

  notify() {
    // powiadomienie o zmianie stanu...
    console.log(`We have new job offer!!!`);
    this.observers.forEach((observer) => {
      // ... jest wysyłane wszystkim obserwatorom
      observer.sendJobOffer(this.newJobOffer);
    });
  }

  addNewOffer(offer) {
    // dodanie nowego ogłoszenia = zmiana stanu
    this.newJobOffer = offer;
    // po dodaniu ogłoszenia wyślijmy wszystkim powiadomienia
    this.notify();
  }
}

// Obserwator - kandydat szukający pracy
// to on będzie nasłuchiwał na wiadomości płynące z obiektu "Subject"
class Candidate {
  constructor(name) {
    this.name = name; // imię kandydata
  }

  // metoda którą będzie wywoływal "Subject"
  // w celu poinformowania o zmianie jego stanu
  sendJobOffer(offer) {
    console.log(
      `${this.name}, new job offer for you: ${offer.title} with ${offer.sallary} PLN sallary`
    );
  }
}

// tworzymy nową instację naszego portalu z ogłoszeniami
let portal = new JobsPortal();

// w naszym portalu rejestrują się nowi użytkownicy
let adrian = new Candidate("Adrian");
let gracja = new Candidate("Gracja");
let piotr = new Candidate("Piotr");

// dodajemy nowych użytkowników do listy obserwatorów
portal.addCandidate(adrian);
portal.addCandidate(gracja);
portal.addCandidate(piotr);

// dodajemy nowe ogłoszenie o pracę
// nasz portal zajmie się już wysłaniem tego ogłoszenia
// do wszystkich zainteresowanych
portal.addNewOffer({ title: "Frontend developer", sallary: "15k" });

// jeden kandydat znalazł pracę
// więc usuwamy go z listy obserwatorów
portal.removeCandidate(piotr);

// dodajemy kolejne ogłoszenie
// i zostaje ono automatycznie wysłane do pozostałych kandydatów
portal.addNewOffer({ title: "Backend developer", sallary: "10k" });
