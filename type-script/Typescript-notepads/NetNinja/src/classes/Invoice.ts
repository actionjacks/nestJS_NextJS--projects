
import { HasFormatter } from "../interfaces/HasFormatter";

//const anchor = document.querySelector("a")!;
export class Invoice implements HasFormatter {
  constructor(
    public client: string,
    public details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client}${this.details}${this.amount}`;
  }
}
