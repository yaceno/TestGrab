async function callCloudApi() {
    const response = await fetch('https://api.aws.amazon.com/some_endpoint');
    const data = await response.json();
    console.log(data);
}

async function callPaymentApi() {
    const response = await fetch('https://api.paypal.com/v1/payments/payment');
    const data = await response.json();
    console.log(data);
}

async function callLlmApi() {
    const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: 'Hello, world!' })
    });
    const data = await response.json();
    console.log(data);
}

async function callCryptoApi() {
    const response = await fetch('https://api.coinbase.com/v2/prices/spot?currency=USD');
    const data = await response.json();
    console.log(data);
}

callCloudApi();
callPaymentApi();
callLlmApi();
callCryptoApi();
