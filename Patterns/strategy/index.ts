interface PackageToPost {
  from: string;
  to: string;
  weight: number;
}

abstract class CompanyTemplate {
  abstract calculate: (PackageToPost: PackageToPost) => number;
}
abstract class ShippingTemplate {
  abstract company: CompanyTemplate;
  abstract setStrategy: () => CompanyTemplate;
  abstract calculate: (PackageToPost: PackageToPost) => number;
}

class UPS implements CompanyTemplate {
  calculate = (PackageToPost: PackageToPost) => {
    //some dummy calc
    return 1.4;
  };
}
class DPD implements CompanyTemplate {
  calculate = (PackageToPost: PackageToPost) => {
    //some dummy calc
    return 2.4;
  };
}

class Shipping implements ShippingTemplate {
  constructor(public company: CompanyTemplate) {}

  setStrategy = () => this.company;

  calculate = (PackageToPost: PackageToPost) =>
    this.company.calculate(PackageToPost);
}

const ups = new UPS();
const dpd = new DPD();
const packageToPost: PackageToPost = {
  from: "Wasilkow",
  to: "Kopydlowo",
  weight: 12,
};

const shipping = new Shipping(ups);
shipping.setStrategy();
console.log(shipping.calculate(packageToPost));
