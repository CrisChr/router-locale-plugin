# umi 插件开发

## 根据访问的URL，自动切换语言

```
  export default defineConfig({
    plugins: [require.resolve(`${__dirname}/../lib/index.js`)],
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
  })

```

## 用到的umi API

  ### @umijs/plugin-locale
    需动态设置语言，引入@umijs/plugin-locale插件，并在运行时配置setLocale。

    getAllLocales: 获取当前获得所有国际化文件的列表，默认会在 locales 文件夹下寻找类似 en-US.(js|json|ts) 文件。

  ### 插件API（注册 -> 运行 -> 编译 -> 编译完成 -> 构建完成）
    - describe

      用于描述插件的id、key、配置信息、启用方式等

    - onGenerateFile

      生成临时文件，触发时机在webpack编译之前

    - addRuntimePlugin

      添加运行时插件

  ### 插件属性

    - absTmpPath

    - cofing

    - userConfig

## 其它
