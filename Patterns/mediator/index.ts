interface User {
  nick: string;
}
//mediator
class Chatroom {
  participants = {};
  constructor() {}

  join(participant: User) {
    this.participants[participant.nick] = participant;

    participant.addToChatroom(this);
  }

  send(message: string, from, to) {
    if (to) {
      to.receive(message, from, "private");
    } else {
      for (const key in this.participants) {
        if (this.participants[key] !== from) {
          this.participants[key].receive(message, from, "public");
        }
      }
    }
  }
}

class User {
  user: User | null = null;
  from: { nick: User | null } = { nick: null };
  to: { nick: User | null } = { nick: null };

  chatroom: null | Chatroom = {};

  constructor(nick: User) {
    this.user = nick;
  }

  addToChatroom(chatroom: Chatroom) {
    this.chatroom = chatroom;
  }

  senMessage(message: string, to: { nick: User | null }) {
    this.chatroom.send(message, this, to);
  }

  receive(message: string, from: { nick: User | null }, type) {
    console.log(
      `to ${this.nick} new ${type} message from ${from.nick}--${message}`
    );
  }
}
//wrocic do tego i otypowac
