// pojedyńczy użytkownik czatu
// w momencie inicjalizowania nie wie on nic o innych użytkownikach
class User {
  constructor(nick) {
    this.nick = nick; // identyfikuje go jedynie nick
    this.chatroom = null; // i może on dołączyć do jednego pokoju czatu
  }

  addToChatroom(chatroom) {
    // za pomocą tej metody może dołączyć do czatu
    this.chatroom = chatroom;
  }

  sendMessage(message, to) {
    // może wysłać wiadomość - trafi ona do mediatora
    // przypominajka - this będzie odnosiło się do konkretnej instancji Usera
    this.chatroom.send(message, this, to);
  }

  receive(message, from, type) {
    // może wyświetlić otrzymaną wiadomość oraz jej nadawcę
    // wiadomość otrzymamy od mediatora
    console.log(
      `[To ${this.nick}] New ${type} message from ${from.nick}: ${message}`
    );
  }
}

// "Chatroom" to mediator w naszym systemie
// o on będzie odbierał i wysyłał dalej wiadomości
class Chatroom {
  constructor() {
    this.participants = {}; // mediator wie o wszystkich uczestnikach czatu
  }

  join(participant) {
    // dodajemy nowego użytkownika do listy wszystkuch użytkowników
    this.participants[participant.nick] = participant;
    // łączymy użytkownika z tym konkretnym mediatorem
    // dzięki temu użytkownik będzie mógł z niego korzystać
    participant.addToChatroom(this);
  }

  /* 
      Mediator jest odpowiedzilany za prawidłowe rozsyłanie dalej
      wiadomości które otrzyma od użytkowników.
      Możemy dodać tutaj wiele funkcjonalności jak np.
      filtrowanie niecenzuralnych słów, szyfrowanie/deszyfrowanie, itd.  
  */
  send(message, from, to) {
    if (to) {
      // jeżeli sprecyzujemy odbiorcę,
      // mediator wyśle to jako wiadomość prywatną
      to.receive(message, from, "private");
    } else {
      // w przeciwnym wypadku wiadomośc trafi na czat grupowy
      // tzn. zostanie wysłana do wszystkich
      for (const key in this.participants) {
        if (this.participants[key] !== from) {
          this.participants[key].receive(message, from, "public");
        }
      }
    }
  }
}

// Tworzymy instancję naszego mediatora
const chatroom = new Chatroom();

// Tworzymy uczestników czatu
const jan = new User("Jan");
const kamil = new User("Kamil");
const aga = new User("Aga");
const pjtr = new User("pjtr");

// użytkownicy czatu dołączają do pokoju czatu
chatroom.join(jan);
chatroom.join(kamil);
chatroom.join(aga);
chatroom.join(pjtr);

// i wysyłają na czacie wiadomości
jan.sendMessage("Czy znacie jakieś fajne filmy?");
jan.sendMessage("Szukam czegoś na weekend"); // wiadomość grupowa
kamil.sendMessage("Hej, prywatnie mogę Ci polecić La La Land", jan);
aga.sendMessage("Sprzedam Opla!");
pjtr.sendMessage("Aga, chyba nie ten kanał...", aga); // wiadomość prywatna
