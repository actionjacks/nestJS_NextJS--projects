"use strict";
class CompanyTemplate {
}
class ShippingTemplate {
}
class UPS {
    constructor() {
        this.calculate = (PackageToPost) => {
            //some dummy calc
            return 1.4;
        };
    }
}
class DPD {
    constructor() {
        this.calculate = (PackageToPost) => {
            //some dummy calc
            return 2.4;
        };
    }
}
class Shipping {
    constructor(company) {
        this.company = company;
        this.setStrategy = () => this.company;
        this.calculate = (PackageToPost) => this.company.calculate(PackageToPost);
    }
}
const ups = new UPS();
const dpd = new DPD();
const packageToPost = {
    from: "Wasilkow",
    to: "Kopydlowo",
    weight: 12,
};
const shipping = new Shipping(ups);
shipping.setStrategy();
console.log(shipping.calculate(packageToPost));
