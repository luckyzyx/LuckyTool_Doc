import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://luckyzyx.github.io/LuckyTool/",

  author: {
    name: "忆清鸣、luckyzyx",
    url: "https://github.com/luckyzyx",
  },

  iconAssets: "iconfont",

  logo: "/logo.png",

  repo: "https://github.com/luckyzyx/LuckyTool",

  docsDir: "website/docs/", // 文档在仓库中的目录，默认为根目录

  // 主题色
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    orange: "#fb9b5f",
  },

  fullscreen: true, // 全屏
  lastUpdated: true, // 是否显示页面最后更新时间
  contributors: true, // 是否显示页面贡献者
  editLink: true, // 是否展示编辑此页链接
  print: false, // 禁止打印

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      // footer:
      // '使用 <a href="https://theme-hope.vuejs.press/" target="_blank">VuePress Theme Hope</a> 主题 | MIT 协议, 版权所有 © 2019-present Mr.Hope',

      footer:
        'Copyright © 2023 <a href="https://github.com/luckyzyx" target="_blank">忆清鸣、luckyzyx</a>',

      copyright: false,

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      // footer:
      // 'Use <a href="https://theme-hope.vuejs.press/" target="_blank">VuePress Theme Hope</a> Theme | MIT Protocol, Copyright © 2019-present Mr.Hope',

      footer:
        'Copyright © 2023 <a href="https://github.com/luckyzyx" target="_blank">忆清鸣、luckyzyx</a>',

      copyright: false,

      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/en/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    copyright: true, // 启用复制添加版权
    prismjs: false, // 禁用主题捆绑代码高亮

    // comment: {
    //   // @ts-expect-error: You should generate and use your own comment service
    //   provider: "Waline",
    // },
    comment: false, // 关闭评论

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
