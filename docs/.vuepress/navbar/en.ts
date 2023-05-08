import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
      text: "Introduction",
      icon: "creative",
      link: "/en/info",
      activeMatch: "^/en/info",
    },
    {
      text: "Download",
      icon: "creative",
      link: "/en/use/download_link",
      activeMatch: "^/en/use",
    },
    {
      text: "Function",
      icon: "creative",
      link: "/en/guide/",
      activeMatch: "^/en/guide",
    },
    {
      text: "Feedback",
      icon: "creative",
      link: "/en/feedback/check_problem",
      activeMatch: "^/en/feedback",
    },
    {
      text: "Donate",
      icon: "creative",
      link: "/en/donate",
      activeMatch: "^/en/donate",
    },
    {
      text: "Links",
      icon: "creative",
      children: [
        {
          text: "Github Repo",
          icon: "creative",
          link: "https://github.com/luckyzyx/LuckyTool",
        },
        {
          text: "LSPosed Repo",
          icon: "creative",
          link: "https://github.com/Xposed-Modules-Repo/com.luckyzyx.luckytool",
        },
        {
          text: "QQ Channel",
          icon: "creative",
          link: "https://pd.qq.com/s/ahjm4zyxb",
        },
        {
          text: "Telegram Channel",
          icon: "creative",
          link: "https://t.me/LuckyTool",
        },
        {
          text: "Telegram Discussion Group",
          icon: "creative",
          link: "https://t.me/+F42pfv-c0h4zNDc9",
        },
        {
          text: "Vuepress v2",
          icon: "creative",
          link: "https://v2.vuepress.vuejs.org/",
        },
        {
          text: "vuepress-theme-hope",
          icon: "creative",
          link: "https://theme-hope.vuejs.press/",
        },
      ],
    },
]);
