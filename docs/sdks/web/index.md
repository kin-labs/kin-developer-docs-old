# Web ||70

### The Web SDK can be added as a project dependency by using one of the following commands

```shell
# if using yarn
yarn add @kin-sdk/client

# if using npm
npm install @kin-sdk/client
```

### Instantiate a new Kin client

Create a new instance of the Kin client and pass in the environment. The example snippet below passes in the testing environment, the test network.

```typescript
// Import the client
import { KinClient, KinTest } from "@kin-sdk/client";

// Create a new instance of client and pass in the test network
const client = new KinClient(KinTest);
```

For more details on how to use the Web SDK, you can:

- Checkout one of the web starter kits:

  - <a href="https://github.com/kin-sdk/kin-sdk-demo-react" target="_blank">React Starter Kit</a>
  - <a href="https://github.com/kin-sdk/kin-sdk-demo-vue" target="_blank">Vue Starter Kit</a>
  - <a href="https://github.com/kin-sdk/kin-sdk-demo-angular" target="_blank">Angular Starter Kit</a>

- [Walk through the Web Tutorial](/tutorials/web/)
