# Python ||60

## Introduction

This tutorial will take you through the basics of creating a Kin enabled app using Python.

## Requirements

Make sure you have read [Getting Started](/tutorials/#getting-started) and have the required environment variables

## Implementing Kin in your app

#### 1. Install the Kin SDK for Python to your project:

```shell
pip install kin-sdk-v2
```

#### 2. Create a Python app and add the [kin.py](https://github.com/kintegrate/kin-starter-python/blob/main/kin.py) class to your app

This class abstracts some calls to Kin's official SDK and is fully usable out of the box. However, you can easily extend it to suite your custom needs.

#### 3. Instantiate a new Kin client

We're creating a new instance of our Kin wrapper and pass in the environment. In this example we'll pick the Test network.

```python
// Set up Kin client
kin = Kin(Environment.TEST)
```

### Congratulations! You now have a Kin enabled app running!

## Making calls to the Kin blockchain

In this example, we're going to create a new wallet for both Alice and Bob by generating new key pair. After the wallet is created, Alice will send a P2P transaction to Bob.

#### 4. Create account for Alice

We create a new private key-pair for Alice, then call into our wrapper to create a new account. After creation, we log out the public address of both the wallet, and the balances

```python
private_key_alice = Kin.generate_key()
token_accounts_alice = kin.create_account(private_key_alice)

print(f'Public Key Alice    {private_key_alice.public_key.to_base58()}')
for token_account in token_accounts_alice:
    print(f'Token Account Alice {token_account.to_base58()}')
```

#### 4. Create account for Bob

```python
private_key_bob = Kin.generate_key()
token_accounts_bob = kin.create_account(private_key_bob)

print(f'Public Key Bob    {private_key_bob.public_key.to_base58()}')
for token_account in token_accounts_bob:
    print(f'Token Account Bob {token_account.to_base58()}')
```

#### 5. Add Helper method

Creating the Account on the Solana Blockchain and later the Kin 'token account', might take a few seconds. To address for this, we will have several 15 seconds sleep periods as it's an easy way to delay things in our code.

We also use this helper method to print the balance after sleeping.

```python
# Helper method to sleep a bit, then print balance of Alice and Bob
def sleep_and_print_balances():
    print('😴 Sleeping for a bit...')
    time.sleep(15)
    balance = kin.get_balance(private_key_alice.public_key)
    print(f'👛 Balance for Alice:  {quarks_to_kin(balance)} Kin')
    balance = kin.get_balance(private_key_bob.public_key)
    print(f'👛 Balance for Bob:  {quarks_to_kin(balance)} Kin')

# Execute the function one time before moving on so the accounts will be created
sleep_and_print_balances()
```

#### 6. Request Airdrop

We can now request and Airdrop for both of our balances. Note that this is only for the `Test` network.

In this example we'll request 10 Kin for both Alice and Bob.

```python
print('Request Airdrop for Alice')
kin.request_airdrop(token_accounts_alice[0], '10')

print('Request Airdrop for Bob')
kin.request_airdrop(token_accounts_bob[0], '10')

sleep_and_print_balances()
```

#### 7. Send payment from Alice to Bob

Now we can send a payment from one account to the other.

```python
print('Submit P2P Payment from Alice to Bob')
kin.submit_p2p(private_key_alice, private_key_bob.public_key, '2', 'My demo payment')

sleep_and_print_balances()
```
