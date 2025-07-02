export default {
  title: "Dish AI Commit Gen",
  description: "使用 AI 生成标准化 Git/SVN 提交消息的 VSCode 扩展",
  lang: "zh-CN",
  lastUpdated: true,
  base: "/dish-commit-docs/",

  head: [
    ["link", { rel: "icon", href: "/images/logo.png" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  themeConfig: {
    logo: "/images/logo.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" },
      { text: "配置", link: "/config/" },
      { text: "API", link: "/api/" },
      {
        text: "相关链接",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/littleCareless/dish-ai-commit",
          },
          {
            text: "VS Code 市场",
            link: "https://marketplace.visualstudio.com/items?itemName=littleCareless.dish-ai-commit",
          },
        ],
      },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "介绍", link: "/guide/" },
            { text: "快速开始", link: "/guide/getting-started" },
            { text: "代码库索引", link: "/guide/code-indexing" },
            { text: "AI 提供商", link: "/guide/ai-providers" },
            { text: "多语言支持", link: "/guide/languages" },
            { text: "提交消息生成", link: "/guide/commit-message-generation" },
            { text: "PR 摘要生成", link: "/guide/pr-summary" },
            { text: "周报生成", link: "/guide/weekly-report" },
            { text: "分支名称生成", link: "/guide/branch-name" },
          ],
        },
        {
          text: "进阶",
          items: [
            { text: "代码分析", link: "/guide/code-analysis" },
            { text: "合并提交", link: "/guide/merge-commit" },
            { text: "表情符号", link: "/guide/emoji" },
          ],
        },
        {
          text: "其他",
          items: [
            { text: "常见问题", link: "/guide/faq" },
            { text: "依赖要求", link: "/guide/requirements" },
            { text: "更新日志", link: "/guide/changelog" },
          ],
        },
      ],
      "/config/": [
        {
          text: "配置",
          items: [
            { text: "基础配置", link: "/config/" },
            { text: "详细配置", link: "/config/configuration" },
            { text: "AI 提供商配置", link: "/config/ai-providers" },
            { text: "功能配置", link: "/config/features" },
            { text: "命令", link: "/config/commands" },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/littleCareless/dish-ai-commit",
      },
    ],

    footer: {
      message: "使用 MIT 许可发布",
      copyright: "Copyright © 2023-2025",
    },

    search: {
      provider: "local",
    },
  },

  // 添加忽略死链接的配置
  ignoreDeadLinks: [
    // 特定链接
    "http://localhost:11434",
    /CHANGELOG/, // 匹配所有包含 CHANGELOG 的链接
    // 或者忽略全部
    // true
  ],
};
