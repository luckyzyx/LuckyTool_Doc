import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      icon: "creative",
      text: "Module Introduction",
      prefix: "info/",
      link: "info/",
      children: "structure",
    },
    {
      icon: "creative",
      text: "How To Use",
      prefix: "use/",
      collapsible: true,
      children: "structure",
    },
    {
      icon: "creative",
      text: "Module Function",
      prefix: "guide/",
      link: "guide/",
      collapsible: true,
      children: "structure",
    },
    {
      icon: "creative",
      text: "Feedback Process",
      prefix: "feedback/",
      collapsible: true,
      children: "structure",
    },
    {
      icon: "creative",
      text: "Change Log",
      prefix: "/changelog/",
      link: "/changelog/",
      children: "structure",
    },
    {
      icon: "creative",
      text: "Donation Channel",
      prefix: "donate/",
      link: "donate/",
      children: "structure",
    },
  ],
});
