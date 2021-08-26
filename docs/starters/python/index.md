# Python ||60

## Introduction

This will get your Python app Kin enabled in a few minutes. All you need to do is add a simple class file to your app, and you should be able to make calls to Kin's blockchain immediately.

## Requirements

Make sure you have read [Getting Started](/tutorials/#getting-started) and have the required environment variables

#### 1. Install the Kin SDK for Python to your project:

```shell
pip install kin-sdk-v2
```

#### 2. Create a Python app and add the [kin.py](https://github.com/kintegrate/kin-starter-python/blob/main/kin.py) class to your app

This class abstracts some calls to Kin's official SDK and is fully usable out of the box. However, you can easily extend it to suite your custom needs.

#### 3. Instantiate a new Kin client

We're creating a new instance of our Kin wrapper and pass in the environment. In this example we'll pick the Test network.

```python
// Set up Kin client
kin = Kin(Environment.TEST)
```

### Congratulations! You now have a Kin enabled app running!

## Demo App

A demo App is included that you can run and test. To use the app:

1. Pull https://github.com/kintegrate/kin-starter-python into a local folder
2. Access the `/main.py` file on your local.
3. Use this code to test available methods
