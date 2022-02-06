import { JobOffer, Observer } from "./interfaces";

export abstract class CandidateTemplate {
  abstract name: string;
  abstract sendJobOffer(offer: JobOffer): void;
}

export abstract class JobOfficePortal {
  abstract newJobOffer: Object;
  abstract observers: Observer[];

  abstract addCandidate(observer: Observer): void;
  abstract removeCandidate(observer: Observer): void;
  abstract notify(): void;
  abstract addNewOffer(offer: JobOffer): void;
}
