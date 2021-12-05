import createCache from '@emotion/cache';

export const createEmotionCache = createCache({
  key: 'css',
  stylisPlugins: [
    /* your plugins here */
  ],
});
