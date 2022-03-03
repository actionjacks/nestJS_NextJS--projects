function baseStr(amount: number) {
  return amount;
}
function baseStr2(amount: number) {
  return amount * 0.85;
}
function baseStr3(amount: number) {
  return amount * 12;
}

class AutoCart {
  amount: number = 0;

  constructor(public discount: (amount: number) => number) {}

  checkout() {
    return this.discount(this.amount);
  }

  setAmount(amount: number) {
    this.amount = amount;
  }
}

const autoCart = new AutoCart(baseStr2);
autoCart.setAmount(200);
console.log(autoCart.checkout());
