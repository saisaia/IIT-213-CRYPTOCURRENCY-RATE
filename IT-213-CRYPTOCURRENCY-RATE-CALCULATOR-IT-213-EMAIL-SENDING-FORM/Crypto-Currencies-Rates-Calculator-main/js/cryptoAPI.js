const proxyURL = "https://romel-acopra.herokuapp.com/";

class CryptoAPI {

    // Query the REST API
    async queryAPI(currency, cryptocurrency) {

    const url = await fetch(`${proxyURL}https://pro-api.coinmarketcap.com/v1/tools/price-conversion?amount=1&id=${cryptocurrency}&convert=${currency}&CMC_PRO_API_KEY=13f75b87-c7ba-49d2-a468-32896aa8b13b`);

        const result = await url.json();

        return {
            result
        }
    }

    async getCryptoCurrenciesList() {
        const url = await  fetch(`${proxyURL}https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=13f75b87-c7ba-49d2-a468-32896aa8b13b`);

        const cryptoCurrencies = await url.json();

        return {
            cryptoCurrencies
        }
    }
}