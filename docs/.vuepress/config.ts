import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import plugins from "./plugins.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "LuckyTool",

  base: "/LuckyTool_Doc/",

  locales: {
    "/": {
      lang: "zh-CN",
      description: "对ColorOS系统进行的扩展优化的Xposed模块",
    },
    "/en/": {
      lang: "en-US",
      description: "Xposed module for extended optimization of ColorOS system",
    },
  },

  theme,
  plugins,

  // Enable it with pwa
  // shouldPrefetch: false,
});
