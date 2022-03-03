"use strict";
class CryptoDummyAPI {
    getValue(coin) {
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
    constructor(coin) {
        this.coin = coin;
        this.cache = {
            Bitcoin: null,
            Litecoin: null,
            Ethereum: null,
        };
        this.api = new CryptoDummyAPI();
        this.getValue(coin);
    }
    getValue(coin) {
        if (this.cache[coin] === null) {
            this.cache[coin] = this.api.getValue(coin);
        }
        return this.cache[coin];
    }
}
const proxyy = new ProxyCrypto("Litecoin");
