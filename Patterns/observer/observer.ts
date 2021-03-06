import { JobOffer, Observer } from "./interfaces";
import { CandidateTemplate, JobOfficePortal } from "./abstracClasses";

class JobPortal implements JobOfficePortal {
  public newJobOffer: {};
  public observers: Observer[];

  constructor() {
    this.newJobOffer = {} as JobOffer;
    this.observers = [];
  }

  //add observer to array
  addCandidate(observer: Observer): void {
    console.log(`${observer.name},welcome to job portal !`);
    this.observers.push(observer);
  }

  removeCandidate(observer: Observer): void {
    let inx: number = this.observers.findIndex((o: Observer) => o === observer);

    if (inx !== -1) {
      console.log(`${this.observers[inx].name}, good bye and good luck`);
    }
    this.observers.splice(inx, 1);
  }

  notify(): void {
    console.log("we have new job offer");
    this.observers.forEach((observer: Observer) => {
      //send to all observers
      observer.sendJobOffer(this.newJobOffer as JobOffer);
    });
  }

  addNewOffer(offer: JobOffer) {
    this.newJobOffer = offer;
    this.notify();
  }
}

//obserwator
class Candidate implements CandidateTemplate {
  constructor(public name: string) {}

  sendJobOffer(offer: JobOffer) {
    console.log(`
    ${this.name}, new job offer for u ${offer.title} with ${offer.sallary}`);
  }
}

//-----code run instance of observer
//new instance of jobportal
const portal = new JobPortal();

const jacek = new Candidate("jacek");
const placek = new Candidate("placek");

portal.addCandidate(jacek);
portal.addCandidate(placek);

portal.addNewOffer({ title: "Frontend developer", sallary: "15k" });
