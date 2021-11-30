import { rocketLaunch } from '@rocket/launch';

export default {
  presets: [rocketLaunch()],
  imagePresets: {
    responsive: {
      // ...
      ignore: ({ src }) =>
        src.endsWith('.jpeg') ||
        src.endsWith('svg') ||
        src.endsWith('.gif') ||
        src.includes('rocket-unresponsive.'),
    },
  },
};
