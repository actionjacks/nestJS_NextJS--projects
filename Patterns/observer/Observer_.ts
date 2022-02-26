class Subject {
  observers: ObserverTemplate[] = [];
  constructor() {}

  subscribe = (newObserver: ObserverTemplate): void => {
    this.observers.push(newObserver);
  };

  unSubscibe = (observerToRemove: ObserverTemplate): void => {
    this.observers = this.observers.filter((observer) => {
      observer != observerToRemove;
    });
  };

  callObservers = (): void => {
    this.observers.forEach((observer: ObserverTemplate) => observer.call());
  };
}

abstract class ObserverTemplate {
  constructor() {}
  abstract name: string;
  abstract call: () => void;
}

class Observer implements ObserverTemplate {
  constructor(public name: string) {}

  call = () => console.log(`observer notify ${this.name}`);
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
