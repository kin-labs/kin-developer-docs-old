---
title: Javascript
layout: layout-index
eleventyNavigation:
  key: JavaScript
  order: 09
---
# JavaScript

## Register Your App
Before getting started, make sure you sign-up to the [Kin Developer Portal](https://portal.kin.org/) and register your app. The App Index you get will allow you to earn Kin via the KRE once you've successfully applied for access.

## Get Started or Add to an Existing Project

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
    environment : 'mainnet', // mainnet or devnet
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

## Kinetic Client Methods
The Kin Kinetic client gives you access to a wide range of methods. It's all written in TypeScript so you'll be able to easily see what you need to pass in to each method to achieve your desired outcome.


Kinetic SDK Keypair Class
```TS
export declare class Keypair {
    private readonly solanaKeypair;
    mnemonic?: string;
    secretKey?: string;
    publicKey: string;
    constructor(secretKey: string);
    get solana(): SolanaKeypair;
    get solanaPublicKey(): SolanaPublicKey;
    get solanaSecretKey(): Uint8Array;
    static fromByteArray(byteArray: number[]): Keypair;
    static fromMnemonicSeed(mnemonic: string): Keypair;
    static fromMnemonic(mnemonic: string): Keypair;
    static fromMnemonicSet(mnemonic: string, from?: number, to?: number): Keypair[];
    static derive(seed: Buffer, path: string): Keypair;
    static fromSeed(seed: Buffer): Keypair;
    static fromSecretKey(secretKey: string): Keypair;
    static random(): Keypair;
    static generateMnemonic(strength?: 128 | 256): string;
}
```
Kinetic SDK Client Class
```TS
export declare class KineticSdk {
    readonly sdkConfig: KineticSdkConfigParsed;
    solana: Solana | undefined;
    private readonly internal;
    constructor(sdkConfig: KineticSdkConfigParsed);
    get config(): AppConfig | undefined;
    get endpoint(): string;
    get solanaRpcEndpoint(): string | undefined;
    createAccount(options: CreateAccountOptions): Promise<AppTransaction>;
    getBalance(option: GetBalanceOptions): Promise<BalanceResponse>;
    getExplorerUrl(path: string): string | undefined;
    getHistory(options: GetHistoryOptions): Promise<HistoryResponse[]>;
    getTokenAccounts(options: GetTokenAccountsOptions): Promise<string[]>;
    makeTransfer(options: MakeTransferOptions): Promise<AppTransaction>;
    makeTransferBatch(options: MakeTransferBatchOptions): Promise<AppTransaction>;
    requestAirdrop(options: RequestAirdropOptions): Promise<import("../generated").RequestAirdropResponse>;
    init(): Promise<AppConfig>;
    static setup(config: KineticSdkConfig): Promise<KineticSdk>;
}
```



## Demos and Starter Kits
Created to help get you up and running as quickly as possible, these projects can be a great reference point when you get stuck or even a starter for your own project. Happy coding!

### [Kinetic DApp Demo](https://github.com/kin-starters/kin-dapp-kinetic)
A lightweight web-based implementation of Kinetic with a fully functional Next.js based interface.

### [Node SDK Demo](https://github.com/kin-starters/kin-demo-node-sdk)
A full-fat server based implementation of Kin Kinetic. 

This server is compatible with the [Kin DApp Playground](https://github.com/kin-starters/kin-dapp-playground) Front End.

## Mainnet
As soon as you register your app on the [Kin Developer Portal](https://portal.kin.org/), you'll be able to transact on the Solana Devnet and prepare your application for access to the KRE.

### Ready for Mainnet?

First, make sure you complete your application for access to the KRE on the Portal.

Next, you'll need to look at how you're going to connect to a live version of Kinetic on the Solana Mainnet.

[Learn more](/developers/mainnet)

## Contribute
Want to contribute to the Kin Node SDK? Get stuck in [here](https://github.com/kinecosystem/kin-node).
