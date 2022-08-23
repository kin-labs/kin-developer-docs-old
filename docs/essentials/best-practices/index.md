# Developer Best Practices ||40

We want to make it as easy as possible for Kin developers to release their beautiful Apps out into the world. As such, here are a few things that we think will be useful to keep in mind as you work.

## Check the Kin Developer Terms
A great place to start is our [Developer Terms](https://kin.org/kin-developer-terms/). We want to make sure our partners get rewarded for all their hard work, so ensuring your application complies with the Developer Terms can help to avoid any issues with awarding your lovely KRE payments. Thanks for reading them so carefully!

## Kin Branding
If you want to include references to Kin in your App, please make use of our [Branding Materials](https://kin.org/branding/). We have logos, icons and a style guide for how to appropriately implement Kin branding.

## Creating Accounts Efficiently

Account creation on the Solana blockchain comes with a SOL cost that is currently paid for by the Kin Foundation when using SDK-based solutions, which will change in the future. Accounts with zero balances or activity are still charged a [rent fee](https://docs.solana.com/implemented-proposals/rent) by Solana. That means it is in your best interest to make sure that account creation is done efficiently, so as to avoid unnecessary fees.

Due to this rent exemption fee, apps must follow best practices for account creations, or risk having performance throttled. Account creation is almost instantaneous and can be done on a per need basis when the user interacts with Kin for the first time.

The following steps will create accounts efficiently and effectively – in short, you will want to avoid initializing accounts until they are actually needed to transact meaningfully by the user.

1) User installs App on the client
2) Generate the private / public key so that the user can see their address
3) Do not call any functions that might trigger the code path for account initialization until necessary – for example, do not check the balance or getAccount details as this is what actively creates the account on Solana, simply set it at zero.
4) When the user completes an earn event, you can simply send them Kin from the server, this will automatically create the account. This will also work if the user receives a p2p transaction from another user.

You can use a flag to check whether the user has completed at least one earn, in which case it is efficient to check the balance, as the account will have been created based on need.

## Non-Custodial vs Custodial Wallets and Private Key Storage
Generally, a non-custodial wallet is where the end-user has full control over their own funds and the associated private key to the wallet.   A custodial wallet is where the end-users’ private keys are under the control of a third party, which may be the developer of the application, and subsequently the developer is said to have custody over their end-users’ funds.

The Client SDKs offered through Kin.org create end-user wallets which are non-custodial, where the private keys of end-users are stored on their local devices and are not generally available to the developer. However, wallets created via Server SDKs will be custodial by design.

As such, developers should be aware that custodial wallet solutions carry additional legal requirements.  For example,  a custodial wallet operator may be a Money Transmitter or equivalent or require a license to carry on their business.   For this reason,  it is strongly recommended that developers do not hold, store or have access to the private keys of their end-users to avoid being a provider of a custodial wallet, unless they are comfortable meeting all legal requirements to do so.

Note: The above is general information only and is not a full explanation of the law.  The Kin Foundation does not offer legal advice and takes no responsibility for the proper implementation of cryptocurrency user experiences by apps in the Kin Ecosystem; refer to our [Terms of Use](https://kin.org/terms-and-conditions/) for details. Should you have any queries or concerns,  we recommend that you seek independent legal advice specific to your business needs.

## Withdrawing Kin From Apps

Several apps in the Kin community have given users the option to withdraw their funds to an external wallet. This is strongly supported by the Kin Foundation as we believe it helps Kin come closer to the vision of an interconnected ecosystem.

However, due to changes in the Solana infrastructure that have occurred since the publishing of the latest Kin SDKs, we have found that some exchanges have deposit addresses which are incompatible with the current version of Agora. 

In practice, what this means is that some end users may attempt to withdraw to one of these incompatible exchanges, and find that their funds get held up. We have engaged with these exchanges and they have assured us that users can simply file a support ticket to retrieve their funds. However, this is not an ideal user experience and one that can cause frustration for users and App developers alike.

It should be noted that these incompatibilities only exist with some exchanges, while most of the latest Solana-compliant exchanges and wallets are operating without issue. We are also working with these exchanges along with updates to Kin tooling to resolve these issues permanently.

### User Warning
In the meantime, we recommend that if you support user withdrawals, that you implement a quick warning to users along the following lines:

>“To ensure compatibility, it is recommended that you do not withdraw from this app directly to an exchange, and instead use a dedicated Solana-compatible wallet, such as Phantom or Solflare.”

A list of compatible wallets can be found [here](https://kin.org/kin-supported-wallets/).

## Security Tips

Since Kin holds monetary value, when working with it, it is important to take some precautions to protect against malicious users or attackers. Below are some tips that developers should consider when building their App and backend server:

### Cold and Hot Wallets

There is always a risk that something, somewhere in an application is not secure. To minimize the risk of losing Kin, developers should work with at least two wallets: a "cold" wallet and a "hot" wallet. A cold wallet is where a developer can store most of their Kin but isn't used regularly to transact Kin with users, while a hot wallet contains a smaller amount that is used in the App to actually make Kin transactions with users.

By having these two wallets, if a malicious user discovers a security vulnerability in the application code that allows them to drain the hot wallet, the maximum amount of Kin that can be lost is what is stored in the hot wallet. If that happens, developers can then identify the problem in the application code, fix the security bug and then create a new hot wallet (since the old one has been compromised) to use. Developers can simply keep a check on the amount of Kin in the hot wallet and top it up when needed.

### Earns

An "earn" is a Kin payment sent from an App to a user. An earn typically involves the client App (browser or mobile app) requesting a backend server for a certain amount of Kin (e.g. for completing an action), then the backend server submitting a transaction for the amount requested. 

However, App backend servers should **never** blindly accept such requests, otherwise they risk having their Kin account drained by malicious users. Developers should always take care to implement some protections against potentially malicious attackers.

As a starting point, some examples of things developers can do to protect their Kin are:

- Have a maximum limit in the server for a single earn transaction
- Implement amount limits to prevent users from earning more than is reasonable/expected for the app. For example:
  - Implement a daily earn limit per App user or Kin account
  - Implement a total earn limit for all users
- Use SMS verification to verify users and only give earns to verified users

The above suggestions don't result in a 100% secure earn process, but every step taken by a developer to protect their Kin wallet makes it more difficult for attackers to steal Kin from them.

### Spends

A "spend" is a Kin payment sent from a user to an app. A common "spend" use case is for a user to send a transaction for a certain amount to purchase something.

An example of an unsafe spend flow (using a mug-purchasing app) is as follows:

1. The user clicks a button that sends 1000 Kin from the user's wallet to the App's wallet.
2. Once the transaction is complete, the client (browser or mobile app) makes a request to the backend server to send the user a mug to their shipping address.

This flow is unsafe because it would be easy for an attacker to inspect the API call from the client App to the backend server in step 2 and start repeatedly sending the same request to get free mugs. It's missing the important step of having the backend server validate the transaction prior to sending the user a mug.

In general, some of the things that developers should look for prior to fulfilling a spend are:

- Transactions with incorrect amounts
- Transactions with incorrect destinations (developers should make sure the transaction is actually sending Kin to their App's account)
- "Reused" transactions - some attackers might try to use the same completed transaction multiple times to try and redeem a single purchase multiple times.

<!-- Some ways to add this validation are:

- Making use of the foreign key field in the transaction [memo](/docs/how-it-works/#kin-binary-memo-format) in transactions to indicate what a transaction is for
- Using the [Sign Transaction](/docs/how-it-works/#sign-transaction) webhook to validate transactions, verifying that the transaction contents match the memo and any included [invoices](/docs/how-it-works/#invoices) prior to its submission
- When a user tries to "redeem" a purchase using a submitted transaction, check the memo to make sure it matches what the user is trying to claim

The options listed above are just a few examples of ways to add validation, and don't result in a 100% secure spend flow. Each app may have different spend flows for their users, so there are many ways validation can be added to an app. -->

## What If I Get Stuck?

Fortunately, we have an amazing developer community on our Developer Discord server. Join today!

<div class='navIcons'>
<a href='/essentials/getting-help/'><div class='navIcon'>
    <img class='navIcon-icon' alt='Getting Help' src='../images/circle-question-regular.svg'>
    <span class='navIcon-text'>Getting Help</span>
  </div></a>
  <a href='https://discord.com/invite/kdRyUNmHDn' target='_blank'><div class='navIcon'>
    <img class='navIcon-icon' alt='Discord' src='../images/discord-brands.svg'>
    <span class='navIcon-text'>Developer Discord</span>
  </div></a>
</div>


***
**Was this page helpful?**<br/>
If you'd like to tell us how we can make these docs better, let us know here:

<div class='navIcons'>
  <a href='https://forms.gle/qhjcDJR59v8RJsaY7' target='_blank'><div class='navIcon'>
    <img class='navIcon-icon' alt='Developer' src='../images/comment-dots-solid.svg'>
    <span class='navIcon-text'>Feedback</span>
  </div></a>
</div>


