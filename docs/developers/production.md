---
title: Production
layout: layout-index
eleventyNavigation:
  key: 'Production'
  order: 88
---
# Production

## Are You Ready?
Before moving your application onto the Mainnet, it's good practice to make sure you're able to transact on the Devnet. If it's all working how you want, then let's get going!

## Connecting to Mainnet
When you set up your Kinetic Client using one of our SDKs, you need to set your environment. This can be either `devnet` or `mainnet`. For Production, you should choose `mainnet`.

For example, here's how it works with the TypeScript SDK:
```JS
const clientOptions = {
    environment : 'mainnet', // mainnet or devnet
    index : 999, // your App Index
    endpoint: 'https://your_kinetic_instance' // optional kinetic endpoint
};

const kineticClient = await KineticSdk.setup(clientOptions);
```
You'll notice in the example above, you can pass in an optional `endpoint` when you set up the Kinetic Client. <br/> This setting gives us some options in the ways we can connect to Kinetic on mainnet:

<div class='developers-hosting-options'>
  <a href='/developers/production/#kin-hosted'><div class='developers-hosting-option'>
    <img class='essential-icon image-logo' alt='Kin' src='../essentials/images/kin_logo.svg'>
    <span class='essential-text image-logo-text'>Kin <br/>Hosted</span>
  </div></a>
  <a href='/developers/production/#self-hosted'><div class='developers-hosting-option'>
    <img class='use-case-icon' alt='Digital Purchases' src='./images/server-solid.svg'>
    <span class='use-case-text'>Self Hosted</span>
  </div></a>
  <a href='/developers/production/#3rd-party-hosted'><div class='developers-hosting-option'>
    <img class='use-case-icon' alt='Staking' src='./images/globe-solid.svg'>
    <span class='use-case-text'>3rd Party Hosted (Coming Soon)</span>
  </div></a>
</div>

## Kin Hosted
This is the easiest option and what we recommend for small-scale Apps that are just getting started with Kin.
- Get insights into your transactions
- Get insights into your hot-wallet usage
- Restrictions apply
- Only Kin is available, no other mints
- Kinetic version can be updated by the Kin team <br/>(meaning you might have to handle API updates to stay connected)
- Limited logs availability (1 week)

### How To Connect
Just point to `mainnet` as your environment when you instantiate your Kinetic Client via your SDK of choice.
E.g. TypeScript SDK:
```JS
const clientOptions = {
    environment : 'mainnet', // mainnet or devnet
    index : 999, // your App Index
};

const kineticClient = await KineticSdk.setup(clientOptions);
```
That's it!



## Self Hosted
For larger scale Apps or those looking for more control.

- Get insights into your transactions
- Get insights into your hot-wallet usage
- Configure multiple mints (e.g. other tokens, nfts, etc)
- Stay on a specific Kinetic version
- Unlimited log retention
- Configure multiple hot-wallets
- Customisable (Open Source)

### Self Hosted - Connect
Point to `mainnet` as your `environment` and set your `endpoint` to where you've deployed your own Kinetic Instance.
E.g. TypeScript SDK:
```JS
const clientOptions = {
    environment : 'devnet', // mainnet or devnet
    index : 999, // your App Index
    endpoint: 'https://your_kinetic_instance' // your kinetic server address
};

const kineticClient = await KineticSdk.setup(clientOptions);
```
This is the easy bit. Below, we'll explain how to run, deploy and manage your own Kinetic instance.
### Self Hosted - Run Locally

#### Requirements:
```
Node.js 14+
Docker 20+
Yarn v1.22+
```

#### Get Started
To get started with Kinetic, pull down the [Kinetic](https://github.com/kin-labs/kinetic) repo and install dependencies.
```
git clone git@github.com:kin-labs/kinetic.git
cd kinetic
yarn install
```
#### Prepare your Environment Variables
You can copy the contents of `.env.example` into your own `.env` file.
```
ADMIN_USERNAME="alice"
ADMIN_PASSWORD="Kinetic@admin1"
# Provision more apps by providing the byte array of the fee payer and name
APP_1_FEE_PAYER_BYTE_ARRAY=[24,20,238,188,26,234,120,209,88,63,170,46,66,98,21,113,194,120,143,228,231,37,91,0,242,32,180,99,243,179,57,144,11,233,235,235,203,20,105,33,47,140,152,253,12,148,72,175,141,253,242,110,225,110,21,211,118,87,111,206,208,166,190,78]
APP_1_NAME="App 1"
COOKIE_DOMAINS="localhost,local.kinetic.kin.org,pages.dev"
#COOKIE_NAME="__session"
CORS_ORIGINS=http://localhost:4200
#METRICS_ENABLED=true
DATABASE_URL="postgresql://prisma:prisma@localhost:5432/prisma?schema=kinetic"
JWT_SECRET="KineticJwtSecret!"
#DEFAULT_MINT_AIRDROP_AMOUNT=1000
#DEFAULT_MINT_AIRDROP_MAX=50000
DEFAULT_MINT_AIRDROP_SECRET_KEY=[24,20,238,188,26,234,120,209,88,63,170,46,66,98,21,113,194,120,143,228,231,37,91,0,242,32,180,99,243,179,57,144,11,233,235,235,203,20,105,33,47,140,152,253,12,148,72,175,141,253,242,110,225,110,21,211,118,87,111,206,208,166,190,78]
DEFAULT_MINT_DECIMALS=5
DEFAULT_MINT_PUBLIC_KEY=MoGaMuJnB3k8zXjBYBnHxHG47vWcW3nyb7bFYvdVzek
PORT=3000
SOLANA_DEVNET_RPC_ENDPOINT=http://localhost:8899
#SOLANA_MAINNET_RPC_ENDPOINT=mainnet
```
#### Make sure Docker is running
<div class='essentials'>
  <a href='https://www.docker.com/' target='_blank'><div class='essential'>
    <img class='essential-icon' alt='Docker' src='./images/docker-brands.svg'>
    <span class='essential-text'>Docker</span>
  </div></a>
</div>


#### Run Kinetic Services
Then, in separate terminals, do each of the following:

- run the database
```
yarn dev:services:postgres
```
- prepare the database
```
yarn prisma migrate reset && yarn prisma db push
```
- run Solana (`localhost:8899`)
```
yarn dev:services:solana
```
- run the Kinetic API (`localhost:3000`)
```
yarn dev:api
```
- run the Kinetic Admin Tool (`localhost:4400`)
```
yarn dev:admin
```
- run the Kinetic Demo App (`localhost:4200`)
```
yarn dev:demo
```

#### Open The Kinetic Admin Tool
- You can log in using the details set in your `.env` file.
- <a href='http://localhost:4400' target='_blank'>Click Here</a>
#### Open The Kinetic Demo
- Use the demo to test Kin transactions on your Kinetic instance
- <a href='http://localhost:4200' target='_blank'>Click Here</a>
### Self Hosted - Kinetic Manager
<div class='developers-hosting-options'>
  <a href='/developers/kinetic-manager/'><div class='developers-hosting-option'>
    <img class='developers-hosting-option-icon' alt='deployment' src='./images/screwdriver-wrench-solid.svg'>
    <span class='developers-hosting-option-text'>Managing Kinetic</span>
  </div></a>
</div>

### Self Hosted - Deployment
<div class='developers-hosting-options'>
  <a href='/developers/deployment/'><div class='developers-hosting-option'>
    <img class='developers-hosting-option-icon image-logo' alt='deployment' src='./images/heroku.png'>
    <span class='developers-hosting-option-text image-logo-text'>Deploying Kinetic</span>
  </div></a>
</div>



## 3rd Party Hosted

Coming Soon! 

We'll let you know here as and when 3rd Party Hosting solutions become available.

Stay tuned!



***
**Was this page helpful?**<br/>
If you'd like to tell us how we can make these docs better, let us know here:

<div class='contacts-index'>
  <a href='https://forms.gle/qhjcDJR59v8RJsaY7' target='_blank'><div class='contact'>
    <img class='contact-icon' alt='Developer' src='../essentials/images/comment-dots-solid.svg'>
    <span class='contact-text'>Feedback</span>
  </div></a>
</div>
