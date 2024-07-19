import requests

def call_cloud_api():
    url = 'https://api.aws.amazon.com/some_endpoint'
    response = requests.get(url)
    print(response.json())

def call_payment_api():
    url = 'https://api.paypal.com/v1/payments/payment'
    response = requests.get(url)
    print(response.json())

def call_llm_api():
    url = 'https://api.openai.com/v1/engines/davinci/completions'
    response = requests.post(url, json={'prompt': 'Hello, world!'})
    print(response.json())

def call_crypto_api():
    url = 'https://api.coinbase.com/v2/prices/spot?currency=USD'
    response = requests.get(url)
    print(response.json())

if __name__ == '__main__':
    call_cloud_api()
    call_payment_api()
    call_llm_api()
    call_crypto_api()
