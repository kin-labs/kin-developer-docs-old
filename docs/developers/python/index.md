---
title: Python SDK
layout: layout-index
eleventyNavigation:
  key: Python SDK
  order: 19
---
# Python SDK

## Implementing Kin in your app
This tutorial will take you through the basics of creating a Kin enabled app using Python.

### Requirements

Make sure you have read [Getting Started](/tutorials/#getting-started) and have the required environment variables


#### 1. Install the Kin SDK for Python to your project:

```shell
pip install kin-sdk-v2
```

#### 2. Create a Python app and add the [kin.py](https://github.com/kintegrate/kin-starter-python/blob/main/kin.py) class to your app

This class abstracts some calls to Kin's official SDK and is fully usable out of the box. However, you can easily extend it to suite your custom needs.

#### 3. Instantiate a new Kin client

We're creating a new instance of our Kin wrapper and pass in the environment. In this example we'll pick the Test network.

```python
# Set up Kin client
kin = Kin(Environment.TEST)
```

### Congratulations! You now have a Kin enabled app running!

### Making calls to the Kin blockchain

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

## Starter / Demo Apps

### Starter App
A demo App is included that you can run and test. To use the app:

1. Pull https://github.com/kintegrate/kin-starter-python into a local folder
2. Access the `/main.py` file on your local.
3. Use this code to test available methods

### Kin DApp Playground

Our DApp Playground is a great place for you start playing with Kin as quickly and easily as possible.

![Kin DApp Playground](../images/Kin-DApp-Playground-1.gif)

A fully functional front-end, the Kin DApp Playground is split into three sections, one each for a different way of using Kin in applications: 

- Backend Server via Kin Server SDK (Node, Python)
- Web DApp via Kin Web SDK
- Web DApp via SDK-less

#### Repo
- [Kin DApp Playground](https://github.com/kin-starters/kin-dapp-playground)

### Kin Python SDK Demo
- [Kin Python Demo](https://github.com/kin-starters/kin-demo-python-sdk)

## Contribute
Want to contribute to the Kin Python SDK?
<div class='navIcons'>
  <a href='https://github.com/kinecosystem/kin-node' target='_blank'><div class='navIcon'>
    <img class='navIcon-icon' alt='Kinetic' src='../images/github-brands.svg'>
    <span class='navIcon-text'>Kin Python SDK</span>
  </div></a>
</div>

## What If I Get Stuck?

Fortunately, we have an amazing developer community on our Developer Discord server. Join today!

<div class='navIcons'>
<a href='/essentials/getting-help/'><div class='navIcon'>
    <img class='navIcon-icon' alt='Getting Help' src='../../essentials/images/circle-question-regular.svg'>
    <span class='navIcon-text'>Getting Help</span>
  </div></a>
  <a href='https://discord.com/invite/kdRyUNmHDn' target='_blank'><div class='navIcon'>
    <img class='navIcon-icon' alt='Discord' src='../../essentials/images/discord-brands.svg'>
    <span class='navIcon-text'>Developer Discord</span>
  </div></a>
</div>

## Developer Best Practices

Once you're ready to code, have a quick look at our [Developer Best Practices](/essentials/best-practices/) where we cover some useful topics that you'll want to keep in mind as you build out your Kin application.

<div class='navIcons'>
  <a href='/essentials/best-practices/'><div class='navIcon'>
    <img class='navIcon-icon' alt='Best Practices' src='../../essentials/images/rainbow-solid.svg'>
    <span class='navIcon-text'>Best Practices</span>
  </div></a>
</div>

***
**Was this page helpful?**<br/>
If you'd like to tell us how we can make these docs better, let us know here:

<div class='navIcons'>
  <a href='https://forms.gle/qhjcDJR59v8RJsaY7' target='_blank'><div class='navIcon'>
    <img class='navIcon-icon' alt='Developer' src='../../essentials/images/comment-dots-solid.svg'>
    <span class='navIcon-text'>Feedback</span>
  </div></a>
</div>
