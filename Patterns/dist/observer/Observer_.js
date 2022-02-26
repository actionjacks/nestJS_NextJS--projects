"use strict";
class Subject {
    constructor() {
        this.observers = [];
        this.subscribe = (newObserver) => {
            this.observers.push(newObserver);
        };
        this.unSubscibe = (observerToRemove) => {
            this.observers = this.observers.filter((observer) => {
                observer != observerToRemove;
            });
        };
        this.callObservers = () => {
            this.observers.forEach((observer) => observer.call());
        };
    }
}
class ObserverTemplate {
    constructor() { }
}
class Observer {
    constructor(name) {
        this.name = name;
        this.call = () => console.log(`observer notify ${this.name}`);
    }
}
const subject = new Subject();
//observers
const obs1 = new Observer("jacek");
const obs2 = new Observer("placek");
const obs3 = new Observer("sracek");
subject.subscribe(obs1);
subject.subscribe(obs2);
subject.subscribe(obs3);
subject.callObservers();
