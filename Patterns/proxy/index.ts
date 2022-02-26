type Econints = "Bitcoin" | "Litecoin" | "Ethereum";

interface DateEcoints {
  Bitcoin: number | null;
  Litecoin: number | null;
  Ethereum: number | null;
}
class CryptoDummyAPI {
  getValue(coin: Econints) {
    console.log("connecting to API");

    switch (coin) {
      case "Bitcoin":
        return "412.14";
        break;
      case "Litecoin":
        return "23424.4232";
        break;
      case "Ethereum":
        return "000.2332";
        break;
      default:
        return undefined;
    }
  }
}

class ProxyCrypto {
  api: CryptoDummyAPI;
  cache: DateEcoints = {
    Bitcoin: null,
    Litecoin: null,
    Ethereum: null,
  };

  constructor(public coin: Econints) {
    this.api = new CryptoDummyAPI();

    this.getValue(coin);
  }

  getValue(coin: Econints) {
    if (this.cache[coin] === null) {
      this.cache[coin] = this.api.getValue(coin);
    }

    return this.cache[coin];
  }
}

const proxyy = new ProxyCrypto("Litecoin");
