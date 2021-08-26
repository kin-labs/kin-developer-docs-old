# Web ||70

## Introduction

This tutorial will take you through the basics of creating a Kin enabled app using `@kin-sdk/client`.

> The fastest way to get started is by using one of our [Kin Web SDK Starters](/starters/web/)

## Requirements

## Implementing Kin in your app

#### 1. Install the dependencies:

```shell
npm install @kin-sdk/client
# Or if you use yarn
yarn add @kin-sdk/client
```

#### 2. Instantiate a new Kin client

We're creating a new instance of our Kin wrapper and pass in the environment. In this example we'll pick the Test network.

```typescript
// Import the client
import { KinClient, KinTest } from "@kin-sdk/client";
// Create instance of client
const client = new KinClient(KinTest);
```

The first thing you need to do is import the `KinClient` and environment (`KinProd` or `KinTest`) into your project, and initialize a new instance of the client:

```typescript
// Import the client
import { KinClient, KinTest } from "@kin-sdk/client";
// Create instance of client
const client = new KinClient(KinTest);
```

### Step 3: Generate a new key pair

In order to interact with the blockchain you need a key pair that consists of a `secret` and `publicKey`.

This account will generally be stored on the users' device, for instance using `IndexedDB`. Make sure that the user has a way to export their secret, so they won't lose access to their Kin.

```typescript
// Generate a new 'account' or 'key-pair'
const account = KinClient.createWallet("create", { name: "Account 1" });
```

### Step 4: Create an account on Kin blockchain

Use the `secret` of the account you generated in the previous step to create the account on the blockchain.

> Creating the account may take a little while (up to 30 seconds, possibly longer on a busy moment) after the `result` above has been returned. You can use the `getBalances` method (see next step) to make sure the account is in fact created. As soon as the account is created correctly, the `getBalances` method will return the address with the balance.

```typescript
const [result, error] = await client.createAccount(account.secret);
if (error) {
  console.error(error);
}
```

### Step 5: Get Balances

The next step is resolving the balances. A 'balance' (or 'token account') is where the Kin is actually stored, as Kin is a token on the Solana blockchain. You can [read more details here](/docs/solana/#token-accounts).

```typescript
// Get Balances
const [result, error] = await client.getBalances(account.publicKey);
```

### Step 6: Request Airdrop (Test network only)

In order to have some Kin to play with on the Test network, you can request an airdrop.

```typescript
// Request airdrop Accounts
const [result, error] = await client.requestAirdrop(account.publicKey, "1000");
```

### Step 7: Submit a payment.

After this is done, you are ready to submit a payment.

The memo field here is optional, the other fields are required.

```typescript
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
