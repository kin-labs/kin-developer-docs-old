---
title: Kinetic Deployment
layout: layout-index
eleventyNavigation:
  key: 'Kinetic Deployment'
  order: 99
---
# Deploying Kinetic to Heroku

Here we will show how you can deploy your own Kinetic Instance to Heroku.

## Deployment Steps
### Fork Kinetic
Fork you own version of Kinetic that we'll use to deploy on Heroku
<div class='navIcons'>
  <a href='https://github.com/kin-labs/kinetic/fork/' target='_blank'><div class='navIcon'>
    <img class='navIcon-icon' alt='Docker' src='./images/github-brands.svg'>
    <span class='navIcon-text'>Fork Kinetic</span>
  </div></a>
</div>

### Sign Up To Heroku 
<div class='navIcons'>
  <a href='https://dashboard.heroku.com/apps/' target='_blank'><div class='navIcon'>
    <img class='navIcon-icon herokuIcon image-logo' alt='deployment' src='./images/heroku.png'>
    <span class='navIcon-text image-logo-text'>Heroku Account</span>
  </div></a>
</div>

### Create a new App
<img src="./images/Heroku01.png" alt="Heroku New App" class='docImage'/>

### Choose the GitHub Deployment Method
Select your forked Repo and Connect<br/>
<img src="./images/Heroku02.png" alt="Heroku Connect to GitHub" />

### Install Postgres Addon
Go to Overview / Configure Add-ons, search and choose the Heroku Postrgres addon.<br/>
<img src="./images/Heroku04.png" alt="Heroku Config Vars" />

### Set your Environment Variables
Go to Settings / Config Vars and add your environment variables as you would have in your `.env` file when [running Kinetic locally](/developers/production/#prepare-your-environment-variables).<br/>
Make sure not to include quote marks around your strings as Heroku won't filter them out.<br/>
<img src="./images/Heroku03.png" alt="Heroku Config Vars" />

### Deploy Kinetic
Go to Deploy / Manual Deploy and deploy Kinetic. You can also choose to set up automatic deployment.
<img src="./images/Heroku05.png" alt="Heroku New App" class='docImage'/>


### Open your App
That's it! You should be good to go. Click 'Open app' to open the Kinetic Manager. Heroku has great options for viewing logs etc through the online console and also has a brilliant CLI if you want to go down that route.

### Configure Your Kinetic Instance with Kinetic Manager
<div class='navIcons'>
  <a href='/developers/kinetic-manager/'><div class='navIcon'>
    <img class='navIcon-icon' alt='deployment' src='./images/screwdriver-wrench-solid.svg'>
    <span class='navIcon-text'>Configure Kinetic</span>
  </div></a>
</div>

## What If I Get Stuck?

Fortunately, we have an amazing developer community on our Developer Discord server. Join today!

<div class='navIcons'>
<a href='/essentials/getting-help/'><div class='navIcon'>
    <img class='navIcon-icon' alt='Getting Help' src='../essentials/images/circle-question-regular.svg'>
    <span class='navIcon-text'>Getting Help</span>
  </div></a>
  <a href='https://discord.com/invite/kdRyUNmHDn' target='_blank'><div class='navIcon'>
    <img class='navIcon-icon' alt='Discord' src='../essentials/images/discord-brands.svg'>
    <span class='navIcon-text'>Developer Discord</span>
  </div></a>
</div>




***
**Was this page helpful?**<br/>
If you'd like to tell us how we can make these docs better, let us know here:

<div class='navIcons'>
  <a href='https://forms.gle/qhjcDJR59v8RJsaY7' target='_blank'><div class='navIcon'>
    <img class='navIcon-icon' alt='Developer' src='../essentials/images/comment-dots-solid.svg'>
    <span class='navIcon-text'>Feedback</span>
  </div></a>
</div>
