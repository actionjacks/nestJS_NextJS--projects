"use strict";
//mediator
class Chatroom {
    constructor() {
        this.participants = {};
    }
    join(participant) {
        this.participants[participant.nick] = participant;
        participant.addToChatroom(this);
    }
    send(message, from, to) {
        if (to) {
            to.receive(message, from, "private");
        }
        else {
            for (const key in this.participants) {
                if (this.participants[key] !== from) {
                    this.participants[key].receive(message, from, "public");
                }
            }
        }
    }
}
class User {
    constructor(nick) {
        this.user = null;
        this.from = { nick: null };
        this.to = { nick: null };
        this.chatroom = {};
        this.user = nick;
    }
    addToChatroom(chatroom) {
        this.chatroom = chatroom;
    }
    senMessage(message, to) {
        this.chatroom.send(message, this, to);
    }
    receive(message, from, type) {
        console.log(`to ${this.nick} new ${type} message from ${from.nick}--${message}`);
    }
}
//wrocic do tego i otypowac
