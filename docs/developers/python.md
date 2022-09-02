---
title: Python SDK
layout: layout-index
eleventyNavigation:
  key: Python SDK
  order: 19
---
# Python

## Get Started or Add to an Existing Project

Getting started with Kin is incredibly straightforward. Just follow the steps below to start transacting with Kin in your App.


#### Installation
```python

```

#### Instantiate the Kinetic Client

The Kinetic Client will give you access to all the methods you need to work with Kin on the blockchain.

We recommend starting with Devnet before moving on to Mainnet. 

```python

```
Don't have an App Index? Register your App on our Developer Portal so you can get your App Index that allows you to transact with our SDKs and earn via the KRE.
s
<div class='navIcons'>
  <a href='/essentials/kre-app-registration/'><div class='navIcon'>
    <img class='navIcon-icon invert' alt='Developer' src='../essentials/images/address-card-solid.svg'>
    <span class='navIcon-text'>Register Your App</span>
  </div></a>
</div>

#### Create Account
You can create accounts from existing mnemonics or secret keys. In this case we'll generate a mnemonic and use that to creat the keypair we use for creating the account on the blockchain.
```python

```
#### Check Balance
```python

```
#### Airdrop Funds (devnet)
```python

```
#### Transfer Kin
```python

```
#### Transfer Kin Batch
```python

```

#### Get Transaction Details
```python

```

#### Get Account History
```python

```

### Webhooks
In [Kinetic Manager](/developers/kinetic-manager/), you can configure your App to use the following webhooks:

#### Events Webhook
This webhook can be used to receive information about completed transactions.
<br/>E.g. In a python server:
```python
```

#### Verify Webhook
This webhook can be used to verify transactions.
<br/>E.g. In a python server return a `200` status code to approve the transaction:
```python
```

## Demos and Starter Kits
Created to help get you up and running as quickly as possible, these projects can be a great reference point when you get stuck or even a starter for your own project. Happy coding!

### [Python SDK Demo](https://github.com/kin-starters/kin-demo-python-sdk)
A full-fat server based implementation of Kin Kinetic. 

This server is compatible with the [Kin DApp Playground](https://github.com/kin-starters/kin-dapp-playground) Front End.

## Ready for Production?
If your App is ready for production, this is the place for you!

<div class='navIcons'>
  <a href='/developers/production/'><div class='navIcon'>
    <img class='navIcon-icon invert' alt='production' src='./images/coins-solid.svg'>
    <span class='navIcon-text'>Production</span>
  </div></a>
</div>

## Earn Kin via the KRE
<div class='navIcons'>
  <a href='/essentials/kin-rewards-engine/'><div class='navIcon'>
    <img class='navIcon-icon invert' alt='Developer' src='../essentials/images/money-bill-trend-up-solid.svg'>
    <span class='navIcon-text'>Kin Rewards Engine</span>
  </div></a>
</div>

## Contribute
Want to contribute to the Kin Python SDK?
<div class='navIcons'>
  <a href='https://github.com/kinecosystem/kin-python' target='_blank'><div class='navIcon'>
    <img class='navIcon-icon invert' alt='Kinetic' src='./images/github-brands.svg'>
    <span class='navIcon-text'>Kinetic Python SDK</span>
  </div></a>
</div>

## What If I Get Stuck?

Fortunately, we have an amazing developer community on our Developer Discord server. Join today!

<div class='navIcons'>
<a href='/essentials/getting-help/'><div class='navIcon'>
    <img class='navIcon-icon invert' alt='Getting Help' src='../essentials/images/circle-question-regular.svg'>
    <span class='navIcon-text'>Getting Help</span>
  </div></a>
  <a href='https://discord.com/invite/kdRyUNmHDn' target='_blank'><div class='navIcon'>
    <img class='navIcon-icon invert' alt='Discord' src='../essentials/images/discord-brands.svg'>
    <span class='navIcon-text'>Developer Discord</span>
  </div></a>
</div>

## Developer Best Practices

Once you're ready to code, have a quick look at our [Developer Best Practices](/essentials/best-practices/) where we cover some useful topics that you'll want to keep in mind as you build out your Kin application.

<div class='navIcons'>
  <a href='/essentials/best-practices/'><div class='navIcon'>
    <img class='navIcon-icon invert' alt='Best Practices' src='../essentials/images/rainbow-solid.svg'>
    <span class='navIcon-text'>Best Practices</span>
  </div></a>
</div>

## Upgrading to Kinetic from Agora?

Prior to the release of Kinetic, our Kin SDKs were powered by a now-deprecated technology called Agora. Here, we will outline the key API changes from the old version of our SDK to the new Kinetic version.

#### General notes
- For methods that request Kin be transferred, `amount` is the amount of Kin, not quarks.
- Response objects from requests have updated / changed.

#### Instantiate the Kin Client
```python
# Kinetic

# Agora
from agora.client import Client
kin_client = Client(env, app_index)
```

#### Create Account
```python
# Kinetic

# Agora
kin_client.create_account(private_key)
```

#### Check Balance
```python
# Kinetic

# Agora
kin_client.get_balance(public_key)
```
#### Airdrop Funds (devnet)
```python
# Kinetic

# Agora
kin_client.request_airdrop(token_account_public_key, quarks)
```

#### Transfer Kin
```python
# Kinetic

# Agora
from agora.model import Payment
payment = Payment(sender, destination, transaction_type, quarks)
transaction = kin_client.submit_payment(payment)
```

#### Transfer Kin Batch
```python
# Kinetic

# Agora
earns = [Earn(destination, amount), Earn(destination, amount)]
batch = EarnBatch(sender, earns)
tranasaction = kin_client.submit_earn_batch(batch)
```

#### Get Transaction Details
```python
# Kinetic

# Agora
import base58
decoded = base58.b58decode(transaction_id)
transaction = kin_client.get_transaction(decoded)
```

#### Webhooks
In Agora, we used the `sign_transaction` webhook. That's been deprecated and we now have the `verify` webhook that can simply return a 200 status code to confirm verification of a request.


***
**Was this page helpful?**<br/>
If you'd like to tell us how we can make these docs better, let us know here:

<div class='navIcons'>
  <a href='https://forms.gle/qhjcDJR59v8RJsaY7' target='_blank'><div class='navIcon'>
    <img class='navIcon-icon invert' alt='Developer' src='../essentials/images/comment-dots-solid.svg'>
    <span class='navIcon-text'>Feedback</span>
  </div></a>
</div>
