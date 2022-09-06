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
```js
const clientOptions = {
    environment : 'mainnet', // mainnet or devnet
    index : 999, // your App Index
    endpoint: 'https://your_kinetic_instance' // optional kinetic endpoint
};

const kineticClient = await KineticSdk.setup(clientOptions);
```
You'll notice in the example above, you can pass in an optional `endpoint` when you set up the Kinetic Client. <br/> This setting gives us some options in the ways we can connect to Kinetic on mainnet:

<div class='navIcons'>
  <a href='/developers/production/#kin-hosted'><div class='navIcon'>
    <img class='navIcon-icon kinIcon' alt='Kin Hosted' src='../essentials/images/kin_icon.svg'>
    <span class='navIcon-text'>Kin <br/>Hosted</span>
  </div></a>
  <a href='/developers/production/#self-hosted'><div class='navIcon'>
    <img class='navIcon-icon invert' alt='Self hosted' src='./images/server-solid.svg'>
    <span class='navIcon-text'>Self Hosted</span>
  </div></a>
  <a href='/developers/production/#3rd-party-hosted'><div class='navIcon'>
    <img class='navIcon-icon invert' alt='3rd Party Hosted' src='./images/globe-solid.svg'>
    <span class='navIcon-text'>3rd Party Hosted</span>
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
```js
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

### Connecting To Your Own Kinetic Instance
Point to `mainnet` as your `environment` and set your `endpoint` to where you've deployed your own Kinetic Instance.
E.g. TypeScript SDK:
```js
const clientOptions = {
    environment : 'devnet', // mainnet or devnet
    index : 999, // your App Index
    endpoint: 'https://your_kinetic_instance' // your kinetic server address
};

const kineticClient = await KineticSdk.setup(clientOptions);
```

Your `endpoint` can be your own deployed Kinetic instance or a locally running instance.
<div class='navIcons'>
  <a href='/developers/deployment/#deploying-kinetic-to-heroku'><div class='navIcon'>
    <img class='navIcon-icon herokuIcon invert' alt='deployment' src='./images/heroku.png'>
    <span class='navIcon-text'>Deploy Kinetic</span>
  </div></a>
  <a href='/developers/deployment/#running-kinetic-locally'><div class='navIcon'>
    <img class='navIcon-icon invert' alt='deployment' src='./images/docker-brands.svg'>
    <span class='navIcon-text'>Run Kinetic Locally</span>
  </div></a>
</div>

### Configure Your Kinetic Instance with Kinetic Manager
See how you can use Kinetic Manager to configure your self-hosted Kinetic instance
<div class='navIcons'>
  <a href='/developers/kinetic-manager/'><div class='navIcon'>
    <img class='navIcon-icon invert' alt='deployment' src='./images/screwdriver-wrench-solid.svg'>
    <span class='navIcon-text'>Configure Kinetic</span>
  </div></a>
</div>




## 3rd Party Hosted

Coming Soon! 

We'll let you know here as and when 3rd Party Hosting solutions become available.

Stay tuned!



***
**Was this page helpful?**<br/>
If you'd like to tell us how we can make these docs better, let us know here:

<div class='navIcons'>
  <a href='https://forms.gle/qhjcDJR59v8RJsaY7' target='_blank'><div class='navIcon'>
    <img class='navIcon-icon invert' alt='Developer' src='../essentials/images/comment-dots-solid.svg'>
    <span class='navIcon-text'>Feedback</span>
  </div></a>
</div>
