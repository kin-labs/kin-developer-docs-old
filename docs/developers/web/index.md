---
title: Web SDK
layout: layout-index
eleventyNavigation:
  key: Web SDK
  order: 29
---
# Web SDK

## Implementing Kin in your app
This tutorial will take you through the basics of creating a Kin enabled app using `@kin-sdk/client`.


#### 1. Install the dependencies:

```shell
npm install @kin-sdk/client
# Or if you use yarn
yarn add @kin-sdk/client
```

#### 2. Instantiate a new Kin client

We're creating a new instance of our Kin wrapper and pass in the environment. In this example we'll pick the Test network.

```js
// Import the client
import { KinClient, KinTest } from "@kin-sdk/client";
// Create instance of client
const client = new KinClient(KinTest);
```

The first thing you need to do is import the `KinClient` and environment (`KinProd` or `KinTest`) into your project, and initialize a new instance of the client:

```js
// Import the client
import { KinClient, KinTest } from "@kin-sdk/client";
// Create instance of client
const client = new KinClient(KinTest);
```

### Step 3: Generate a new key pair

In order to interact with the blockchain you need a key pair that consists of a `secret` and `publicKey`.

This account will generally be stored on the users' device, for instance using `IndexedDB`. Make sure that the user has a way to export their secret, so they won't lose access to their Kin.

```js
// Generate a new 'account' or 'key-pair'
const account = KinClient.createWallet("create", { name: "Account 1" });
```

### Step 4: Create an account on Kin blockchain

Use the `secret` of the account you generated in the previous step to create the account on the blockchain.

> Creating the account may take a little while (up to 30 seconds, possibly longer on a busy moment) after the `result` above has been returned. You can use the `getBalances` method (see next step) to make sure the account is in fact created. As soon as the account is created correctly, the `getBalances` method will return the address with the balance.

```js
const [result, error] = await client.createAccount(account.secret);
if (error) {
  console.error(error);
}
```

### Step 5: Get Balances

The next step is resolving the balances. A 'balance' (or 'token account') is where the Kin is actually stored, as Kin is a token on the Solana blockchain. You can [read more details here](/essentials/terms-and-concepts/#token-account).

```js
// Get Balances
const [result, error] = await client.getBalances(account.publicKey);
```

### Step 6: Request Airdrop (Test network only)

In order to have some Kin to play with on the Test network, you can request an airdrop.

```js
// Request airdrop Accounts
const [result, error] = await client.requestAirdrop(account.publicKey, "1000");
```

### Step 7: Submit a payment.

After this is done, you are ready to submit a payment.

The memo field here is optional, the other fields are required.

```js
const secret = account.secret;
const balance = account.publicKey;
const amount = "1";
const destination = "Don8L4DTVrUrRAcVTsFoCRqei5Mokde3CV3K9Ut4nAGZ";
const memo = "One Kin as a Donation";
await client.submitPayment({
  secret,
  tokenAccount,
  amount,
  destination,
  memo,
});
```


## Starter / Demo Apps

### Starter Apps
Few development platforms are as versatile as the web. While we try to support as many targets as possible, it's currently hard to support _everything_.

In order to get started with the Kin Web SDK, we suggest trying one of the starter kits.

There are currently starters for the following frameworks:

- [Angular](https://github.com/kin-sdk/kin-sdk-demo-angular)
- [React](https://github.com/kin-sdk/kin-sdk-demo-react)
- [Vue](https://github.com/kin-sdk/kin-sdk-demo-vue)

### Kin DApp Playground

Our DApp Playground is a great place for you start playing with Kin as quickly and easily as possible.

![Kin DApp Playground](../images/Kin-DApp-Playground-1.gif)

A fully functional front-end, the Kin DApp Playground is split into three sections, one each for a different way of using Kin in applications: 

- Backend Server via Kin Server SDK (Node, Python)
- Web DApp via Kin Web SDK
- Web DApp via SDK-less

#### Repo
- [Kin DApp Playground](https://github.com/kin-starters/kin-dapp-playground)


## Contribute
Want to contribute to the Kin Web SDK?
<div class='navIcons'>
  <a href='https://github.com/kin-sdk/kin-sdk-web' target='_blank'><div class='navIcon'>
    <img class='navIcon-icon' alt='Kinetic' src='../images/github-brands.svg'>
    <span class='navIcon-text'>Kin Web SDK</span>
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

