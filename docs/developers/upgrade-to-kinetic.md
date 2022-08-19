---
title: Upgrade To Kinetic
layout: layout-index
eleventyNavigation:
  key: 'Upgrade To Kinetic'
  order: 109
---

# Upgrading to Kinetic from Agora?
Prior to the release of Kinetic, our Kin SDKs were powered by a now-deprecated technology called Agora. Here, we will outline the key API changes from the old versions of our SDKs to the new Kinetic versions

## TypeScript / Node SDK

#### General notes
- For methods that request Kin be transferred, 'amount' is the amount of Kin, not quarks.
- Response objects from requests have changed as well so these will have to be taken into account.

#### Instantiate the Kin Client
- Kinetic
```JS
import { KineticSdk } from '@kin-kinetic/sdk'
const kinClient = await KineticSdk.setup({ environment, index})
```
- Agora
```JS
import { Client } from '@kinecosystem/kin-sdk-v2'
const kinClient = new Client(env, { appIndex })
```

#### Create Account
- Kinetic
```JS
await kinClient.createAccount({ owner: keypair})
```
- Agora
```JS
await kinClient.createAccount(privateKey)
```
#### Airdrop Funds ('devnet' only)
- Kinetic
```JS
await kinClient.requestAirdrop({ account, amount })
```
- Agora
```JS
await kinClient.requestAirdrop(publicKey, quarks)
```
#### Check Balance
- Kinetic
```JS
const { balance } = await kinClient.getBalance({ account })
```
- Agora
```JS
const balance = await kinClient.getBalance(publicKey)
```
#### Transfer Kin
- Kinetic
```JS
await kinClient.makeTransfer({ amount, destination, owner, type })
```
- Agora
```JS
await kinClient.submitPayment({ quarks, destination, sender, type})
```
#### Transfer Kin Batch
- Kinetic
```JS
const destinations = [{ destination, amount }]
await kinClient.makeTransferBatch({ owner, destinations })
```
- Agora
```JS
const earns = [{ destination, quarks }]
await kinClient.submitEarnBatch({ sender, earns })
```

#### Webhooks
In Agora, we used the `sign_transaction` webhook. That's been deprecated and we now have the `verify` webhook that can simply return a 200 status code to confirm verification of a request.


***
**Was this page helpful?**<br/>
If you'd like to tell us how we can make these docs better, let us know here:

<div class='contacts-index'>
  <a href='https://forms.gle/qhjcDJR59v8RJsaY7' target='_blank'><div class='contact'>
    <img class='contact-icon' alt='Developer' src='../essentials/images/comment-dots-solid.svg'>
    <span class='contact-text'>Feedback</span>
  </div></a>
</div>
