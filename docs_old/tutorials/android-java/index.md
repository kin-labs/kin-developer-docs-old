# Android / Java ||30

## Introduction

This tutorial will take you through the basics of creating a Kin enabled app using Java.

## Requirements

Make sure you have read [Getting Started](/tutorials/#getting-started) and have the required environment variables

## Implementing Kin in your app

1. Create an empty Android app and add the [Kin.java](https://github.com/kintegrate/kin-starter-java/blob/main/app/src/main/java/com/kin/kin/Kin.java) class to your app

   - The class abstracts some of the calls to Kin's official SDK and is fully usable out of the box. However, you can easily extend it to suite your custom needs.

2. Add the entry in [AndroidManifest.xml](https://github.com/kintegrate/kin-starter-java/tree/main/quick-start/AndroidManifest.xml) to your app's manifest
   - The entry just makes sure your app can connect to the internet, which it needs to, to send and receive transactions
3. Add entries in [build.gradle](https://github.com/kintegrate/kin-starter-java/tree/main/quick-start/build.gradle) to your app's gradle
   - The gradle file adds the official Kin SDK dependencies to your build
4. Make sure `app_icon.png` exists in your `res\drawable` folder
   - This is for a future expansion of the SDK, although it is currently required for instantiation.
5. Import and instantiate the class in any `activity`.
   - Instantiation requires several variables from the getting started section:
   ```java
   Kin kin = new Kin(
            this.getApplicationContext(), //Application context
            false, //In Production mode
            165, //Your App Index
            "GC6D...32XS", //Your Public Address
            "MyUser", //Your device's current user
            "MyPass", //Device's current password
            ((Function1<KinBalance, Unit>) kinBalance -> { //get notifications for balance changes
                balanceChanged(kinBalance);
                return null;
            }),
            ((Function1<List<? extends KinPayment>, Unit>) payments -> { //get notifications for payments
                paymentHappened(payments);
                return null;
            }));
   ```
   - The `app index` and `public address` are used by the Kin foundation to track blockchain transactions your app makes, and also authorize fee-less transactions for your app.

Congratulations! You now have a Kin enabled app running!

## Making calls to the Kin blockchain

### Public addresses

Kin is all about exchanging value between users and your server. (Sending and Receiving Kin). In order to exchange value, each device needs to have a `public address` (like an email address) that it can receive Kin from. Do not confuse the app's public address with the one you used to initialize the SDK. The public address above belongs to your server.

To see your device's public address, call:

```java
kin.address();
```

The SDK returns the blockchain address in two formats - Stellar and Solana. (See getting started for details). However, the wrapper abstracts this and returns the Solana version to your app.

### Tracking balances and payments

During instantiation, you passed two functions to your app. Here is a sample implementation of these functions:

```java
private void balanceChanged(KinBalance balance) {
    //Use this to update your user's current balance
    Log.d("Kin", "Current balance:" + balance.getAmount().toString()); //current balance
}

private void paymentHappened(List<? extends KinPayment> payments) {
    //Use this to know when a payment has taken place
    Log.d("Kin", payments.toString());
}
```

These are passive listeners to transactions on your Kin account. They will report changes in the balance:

1. On instantiation (use this to grab your app's initial balance)
2. When your app makes an **outgoing** payment

Note that it may take a minute or two for them to fire, after a payment has been made. In order to check if the balance has changed from an **incoming** payment, you need to call:

```java
kin.checkTransactions();
```

When a transaction takes place in the blockchain, it may take a minute to reflect in the balance. If you call `checkTransactions()` too early, you will not get the correct balance. E.g. if your app has 10 Kin, and you send it 10 Kin from another app, and immediately call `checkTransactions()`, you will not get the up to date balance.

This is the most conservative and recommended way to monitor balances and transactions. However, you can modify the function in the class to listen more aggressively, which will consume your app's resources.

To test your listeners, run your app, get its address, and send it some Kin in the `Test blockchain`. You can do that by pasting the app's address to `Kin Drops.`

https://kin-drops.herokuapp.com/?YOUR_APP_ADDRESS

Calling `checkTransactions()` will give you the updated balance.

### Viewing transactions

You can view transactions to and from your app, by pasting your app address on: https://explorer.solana.com/address/

If you are on the `Test envoronment`, click the `Main Net` button and switch it to custom, and enter the url: https://local.validator.agorainfra.dev. This will let you see transactions in the test network.

### Sending Kin

The Kin SDK allows you to send a single `payment`, that includes an `invoice` with multiple items. An invoice helps you keep track of what your users bought in your app. To send a payment, you first create an invoice with 1 or more items:

```java
List<Pair<String, Double>> paymentItems = new ArrayList<>();
paymentItems.add(new Pair<>("One Hamburger", 2.0D));
paymentItems.add(new Pair<>("Tip the waitress", 0.5D));
```

You then send this out by calling:

```java
kin.sendKin(
        paymentItems,
        "C2Tb36xUjDDiN4H3xE2T7PuBFb1gdCvP7znen1m8FStJ",
        KinBinaryMemo.TransferType.Spend.INSTANCE,
        (kinPayment, throwable) -> {
            sentKin(kinPayment, throwable);
            return null;
        });
```

The SDK will convert the invoice into a hash, save the payment items for future reference, and finally send out the payment.

## Webhooks

When your app sends a transaction, your server also receives a notification with:

1. The username and password of the specific device
2. The amount of Kin the device spent
3. The invoice details

From here, your server can perform further actions, such as sending a loot box to the device. You can learn more about webhooks by going through the server tutorials.

## Congratulations

Your app is now set up to:

1. Listen and display changes in Kin balance
2. Send Kin

The Kin SDK is extremely versatile. We encourage you to look through the class to see how it has wrapped and implemented it. Make sure you go through the server tutorials, to see how to implement Kin on the server
