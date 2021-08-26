# Go ||50

## Introduction

This tutorial will take you through the basics of creating a Kin enabled app using Go.

## Requirements

Make sure you have read [Getting Started](/tutorials/#getting-started) and have the required environment variables

## Implementing Kin in your app

#### 1. Create a Go app

Now navigate to where you build your projects, for me this is ~/kin-starter-go and make a folder.

```shell
mkdir kin-starter-go
cd kin-starter-go
```

#### 2. Install the Kin SDK using go.mod:

Before we start adding code lets initialize our project, you should replace USERNAME with your github username, for me it is kintegrate

```shell
go mod init github.com/USERNAME/kin-starter-go
```

For now, we need to add required dependencies and download them using god.mod

Copy this and paste it to your god.mod

```go
replace bitbucket.org/ww/goautoneg => github.com/adjust/goautoneg v0.0.0-20150426214442-d788f35a0315

require (
	github.com/kinecosystem/agora-common v0.70.0
	github.com/kinecosystem/kin-go v0.6.0
)
```

Download dependencies using the following:

```shell
go mod download
```

#### 3. Add the [kinsdk.go](https://github.com/kintegrate/kin-starter-go/blob/main/kinsdk/kinsdk.go) package to your app

Note that you would need to make a folder, kinsdk to the project root directory and add the kinsdk.go in that folder.

This package abstracts some calls to Kin's official SDK and is fully usable out of the box. However, you can easily extend it to suite your custom needs.

#### 4. Instantiate a new Kin client

Create a new source file, main.go

```go
package main

func main() {
}
```

We're creating a new instance of our Kin wrapper and pass in the environment. In this example we'll pick the Test network.

```go
// Set up Kin client
k, err := kinsdk.New(client.EnvironmentTest)
```

### Congratulations! You now have a Kin enabled app running!

## Making calls to the Kin blockchain

In this example, we're going to create a new wallet for both Alice and Bob by generating new key pair. After the wallet is created, Alice will send a P2P transaction to Bob.

#### 4. Create account for Alice

We create a new private key-pair for Alice, then call into our wrapper to create a new account. After creation, we log out the public address of both the wallet, and the balances

```go
privateKeyAlice, err := kinsdk.GenerateKey()
tokenAccountsAlice, err := k.CreateAccount(context.Background(), privateKeyAlice)

fmt.Printf("Public Key Alice    %s", privateKeyAlice.Public().Base58())
for _, tokenAccount := range tokenAccountsAlice {
  fmt.Printf("Token Account Alice %s", tokenAccount.Base58())
}
```

#### 4. Create account for Bob

```go
privateKeyBob, err := kinsdk.GenerateKey()
tokenAccountsBob, err := k.CreateAccount(context.Background(), privateKeyBob)

fmt.Printf("Public Key Bob    %s", privateKeyBob.Public().Base58())
for _, tokenAccount := range tokenAccountsBob {
  fmt.Printf("Token Account Bob %s", tokenAccount.Base58())
}
```

#### 5. Add Helper method

Creating the Account on the Solana Blockchain and later the Kin 'token account', might take a few seconds. To address for this, we will have several 15 seconds sleep periods as it's an easy way to delay things in our code.

We also use this helper method to print the balance after sleeping.

```go
// Helper method to sleep a bit, then print balance of Alice and Bob
sleepAndPrintBalances := func() {
  fmt.Printf("😴 Sleeping for a bit...")
  time.Sleep(15 * time.Second)
  balanceAlice, err:= k.GetBalance(context.Background(), privateKeyAlice.Public())
  fmt.Printf("👛 Balance for Alice:  %x Kin, err: %v", balanceAlice, err)
  balanceBob, err:= k.GetBalance(context.Background(), privateKeyBob.Public())
  fmt.Printf("👛 Balance for Bob:    %x Kin, err: %v", balanceBob, err)
}

// Execute the function one time before moving on so the accounts will be created
sleepAndPrintBalances()
```

#### 6. Request Airdrop

We can now request and Airdrop for both of our balances. Note that this is only for the `Test` network.

In this example we'll request 10 Kin for both Alice and Bob.

```go
fmt.Printf("🙏 Request Airdrop for Alice")
k.RequestAirdrop(context.Background(), tokenAccountsAlice[0], "10")

fmt.Printf("🙏 Request Airdrop for Bob")
k.RequestAirdrop(context.Background(), tokenAccountsBob[0], "10")

sleepAndPrintBalances()
```

#### 7. Send payment from Alice to Bob

Now we can send a payment from one account to the other.

```go
fmt.Printf("💸 Submit P2P Payment from Alice to Bob")
k.SubmitP2P(context.Background(), privateKeyAlice, privateKeyBob.Public(), "2", "My demo payment")

sleepAndPrintBalances()
```
