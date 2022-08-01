---
title: TypeScript
layout: layout-index
eleventyNavigation:
  key: TypeScript
  order: 09
---
# TypeScript


## Get Started or Add to an Existing Project

Getting started with Kin is incredibly straightforward. Just follow the steps below to start transacting with Kin in your App.

We recommend starting with Devnet before moving on to Mainnet. Remember, if you want to earn Kin via the KRE, you'll have to register your App on our Dev Portal and apply for access. 

But, this doesn't stop you from building and running your app in the meantime.

#### Installation
```
npm i @kin-kinetic/sdk
```

#### Import
```JS
import { KineticSdk } from '@kin-kinetic/sdk';
import { TransactionType } from '@kin-tools/kin-memo';
```
#### Instantiate the Kinetic Client
The Kinetic Client will give you access to all the methods you need to work with Kin on the blockchain.
```JS
const clientOptions = {
    environment : 'devnet', // mainnet or devnet
    index : 999, // your App Index
};

const kineticClient = await KineticSdk.setup(clientOptions);
```
#### Create Account
You can create accounts from existing mnemonics or secret keys. In this case we'll generate a mnemonic and use that to creat the keypair we use for creating the account on the blockchain.
```JS
const mnemonic = Keypair.generateMnemonic();
const keypair = Keypair.fromMnemonic(mnemonic);
const accountOptions = {
    owner: keypair,
}
await kineticClient.createAccount(accountOptions);
```
#### Airdrop Funds ('devnet' only)
```JS
const airdropOptions = {
    account: keypair.publicKey,
    amount: 1000,
}
await kineticClient.requestAirdrop(airdropOptions);
```
#### Check Balance
```JS
const { balance } = kineticClient.getBalance({ account: keypair.publicKey })
```
#### Transfer Kin
```JS
const transferOptions = {
    amount : 5000,
    destination: `BQJi5K2s4SDDbed1ArpXjb6n7yVUfM34ym9a179MAqVo`,
    owner: keypair,
    type: TransactionType.P2P, // Can be Unknown, None, Earn, Spend or P2P
};

await kineticClient.makeTransfer(transferOptions);
```

## Demos and Starter Kits
Created to help get you up and running as quickly as possible, these projects can be a great reference point when you get stuck or even a starter for your own project. Happy coding!

### [Kinetic DApp Demo](https://github.com/kin-starters/kin-dapp-kinetic)
A lightweight web-based implementation of Kinetic with a fully functional Next.js based interface.

### [Node SDK Demo](https://github.com/kin-starters/kin-demo-node-sdk)
A full-fat server based implementation of Kin Kinetic. 

This server is compatible with the [Kin DApp Playground](https://github.com/kin-starters/kin-dapp-playground) Front End.

## Production
Once you've got your lovely App working on the Solana Devnet, you'll want to think about the next step.

[Learn more](/developers/production)

## Earn Kin via the KRE
If you want to earn Kin via the KRE, make sure you sign-up to the [Kin Developer Portal](https://portal.kin.org/) and register your app. The App Index you get will allow you to earn Kin once you've successfully applied for access to the KRE.

## Contribute
Want to contribute to the Kin Node SDK? Get stuck in [here](https://github.com/kinecosystem/kin-node).

## Upgrading from Agora to Kinetic?
Do the thingz

## Was this page helpful?
If you'd like to tell us how we can make these docs better, let us know here:

<div class='contacts'>
  <a href='https://forms.gle/qhjcDJR59v8RJsaY7' target='_blank'><div class='contact'>
    <img class='contact-icon' alt='Developer' src='../essentials/images/comment-dots-solid.svg'>
    <span class='contact-text'>Feedback</span>
  </div></a>
</div>