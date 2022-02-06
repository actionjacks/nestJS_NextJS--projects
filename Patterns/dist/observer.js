"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstracClasses_1 = require("./abstracClasses");
class JobPortal extends abstracClasses_1.JobOfficePortal {
    constructor() {
        super();
        this.newJobOffer = {};
        this.observers = [];
    }
    //add observer to array
    addCandidate(observer) {
        console.log(`${observer.name},welcome to job portal !`);
        this.observers.push(observer);
    }
    removeCandidate(observer) {
        let inx = this.observers.findIndex((o) => o === observer);
        if (inx !== -1) {
            console.log(`${this.observers[inx].name}, good bye and good luck`);
        }
        this.observers.splice(inx, 1);
    }
    notify() {
        console.log("we have new job offer");
        this.observers.forEach((observer) => {
            //send to all observers
            observer.sendJobOffer(this.newJobOffer);
        });
    }
    addNewOffer(offer) {
        this.newJobOffer = offer;
        this.notify();
    }
}
//obserwator
class Candidate extends abstracClasses_1.CandidateTemplate {
    constructor(name) {
        super();
        this.name = name;
    }
    sendJobOffer(offer) {
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
