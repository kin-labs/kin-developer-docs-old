# Developer Best Practices ||121

We want to make it as easy as possible for Kin developers to release their beautiful Apps out into the world. As such, here are a few things that we think will be useful to keep in mind as you work.

## Check the Kin Developer Terms
A great place to start is our [Developer Terms](https://kin.org/kin-developer-terms/). We’re sure you’ve seen this before… but it can’t hurt to be reminded! We want to make sure our partners get rewarded for all their hard work, so ensuring your application complies with the Developer Terms can help to avoid any issues with awarding your lovely KRE payments. Thanks for reading them so carefully!

## Account Creation Best Practices
### Creating Accounts Efficiently

Account creation on the Solana blockchain comes with a SOL cost that is currently paid for by the Kin Foundation when using SDK-based solutions, which will change in the future. Accounts with zero balances or activity are still charged a [rent fee](https://docs.solana.com/implemented-proposals/rent) by Solana. That means it is in your best interest to make sure that account creation is done efficiently, so as to avoid unnecessary fees.

Due to this rent exemption fee, apps must follow best practices for account creations, or risk having performance throttled. Account creation is almost instantaneous and can be done on a per need basis when the user interacts with Kin for the first time.

The following steps will create accounts efficiently and effectively – in short, you will want to avoid initializing accounts until they are actually needed to transact meaningfully by the user.

1) User installs app on the client
2) Generate the private / public key so that the user can see their address
3) Do not call any functions that might trigger the code path for account initialization until necessary – for example, do not check the balance or getAccount details as this is what actively creates the account on Solana, simply set it at zero.
4) When the user completes an earn event, you can simply send them Kin from the server, this will automatically create the account. This will also work if the user receives a p2p transaction from another user.

You can use a flag to check whether the user has completed at least one earn, in which case it is efficient to check the balance, as the account will have been created based on need.

## Non-Custodial vs Custodial Wallets and Private Key Storage
Generally, a non-custodial wallet is where the end-user has full control over their own funds and the associated private key to the wallet.   A custodial wallet is where the end-users’ private keys are under the control of a third party, which may be the developer of the application, and subsequently the developer is said to have custody over their end-users’ funds.

The SDKs generally offered through Kin.org create end-user wallets which are non-custodial in design where the private keys of end-users are stored on their local devices and are not generally available to the developer. 

Nevertheless, developers should be aware that custodial wallet solutions carry additional legal requirements.  For example,  a custodial wallet operator may be a Money Transmitter or equivalent or require a license to carry on their business.   For this reason,  it is strongly recommended that developers do not hold, store or have access to the private keys of their end-users to avoid being a provider of a custodial wallet, unless they are comfortable they meet all legal requirements to do so.

Note: The above is general information only and is not a full explanation of the law.  The Kin Foundation does not offer legal advice and takes no responsibility for the proper implementation of cryptocurrency user experiences by apps in the Kin Ecosystem; refer to our [Terms of Use](https://kin.org/terms-and-conditions/) for details. Should you have any queries or concerns,  we recommend that you seek independent legal advice specific to your business needs.

