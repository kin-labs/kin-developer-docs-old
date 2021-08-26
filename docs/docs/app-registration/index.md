# App Registration ||40

As mentioned in the [How it Works](/docs/how-it-works/) section, app registration is _not_ required to get started with creating accounts and submitting simple payments. Developers can get started by configuring their SDKs to use the [Test Environment](/docs/terms-and-concepts/#test-environment).

However, to qualify for KRE rewards, make fee-less transactions, or to make use of [webhooks](/docs/how-it-works/#webhooks) or [invoicing](/docs/how-it-works/#invoices) in the hosted version of Agora, apps must register using the [Kin Developer Portal](https://portal.kin.org). After registering, you'll be able to create a new app, be automatically issued an App Index, and manage the production and test environments.

After you've [registered for the Developer Portal and created an app](#register), your app will be issued an [app index](/docs/terms-and-concepts/#app-index), which should be included in the [memo](/docs/how-it-works/#kin-binary-memo-format) of transactions (or when using the [SDKs](/docs/#available-sdks)) for transactions to be properly attributed to specific apps. When you initialize your Kin SDK with your app index, it automatically gets included in the memo of transactions sent by your users and/or backend server.

## Register

To register your app:

- Create an account on the [Kin Developer Portal](https://portal.kin.org)
- We'll send an email to the account you used during registration. Open that email and follow the instructions to verify your account
- Login to the [Kin Developer Portal](https://portal.kin.org) and navigate to Apps
- Click [Create App](https://portal.kin.org/apps/create), fill in your details, and submit

Congrats! Your app is now registered!

At anytime, you can navigate back to the Apps section to find your App Index or manage:

- Your app settings
- Your environments (production and testing)

## Configurable Options

After initial registration, the follow-up email will contain instructions on how to configure various options for their app. Below are descriptions of the options that can be configured when using Agora.

### Webhooks

The following options are configurable for developers interested in using [webhooks](/docs/how-it-works/#webhooks):

- **Webhook Secret**: Required for an app to make use of any [webhooks](/docs/how-it-works/#webhooks). This secret will be used by Agora to generate the `X-Agora-HMAC-SHA-256` [signature](/docs/agora-webhook-reference/#authentication) so that apps can verify the origin of the requests.
- **Sign Transaction URL**: The URL for Agora to send [Sign Transaction](/docs/how-it-works/#sign-transaction) webhook requests. Required to make use of the sign transaction webhook.
- **Events URL**: the URL for Agora to send [Events](/docs/how-it-works/#events) webhook requests. Required to make use of the events webhook.
