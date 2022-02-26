export interface JobOffer {
  title: string;
  sallary: string;
}

export interface Observer {
  name: string;
  sendJobOffer(offer: JobOffer): void;
}
