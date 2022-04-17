import { defineConfig } from 'umi';

export default defineConfig({
  plugins:[require.resolve(`${__dirname}/../lib/index.js`)],
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  routerLocale: {
    alias: {
      'zh-CN': 'zh',
      'en-US': 'en',
    }
  },
  locale: {
    default: 'zh-CN',
    baseNavigator: true,
    baseSeparator:'-'
  }
});
