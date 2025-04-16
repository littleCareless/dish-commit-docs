# Dish AI Commit Gen 官方文档网站

这是 Dish AI Commit Gen VSCode 扩展的官方文档网站，基于 VitePress 构建。

## 快速开始

### 前置条件

- Node.js 16.0 或更高版本
- npm 或 yarn 包管理器

### 本地开发

1. 克隆此仓库：

```bash
git clone https://github.com/littleCareless/dish-ai-commit-website.git
cd dish-ai-commit-website
```

2. 安装依赖：

```bash
npm install
# 或
yarn install
```

3. 启动本地开发服务器：

```bash
npm run docs:dev
# 或
yarn docs:dev
```

4. 在浏览器中访问 `http://localhost:5173` 查看网站。

## 构建生产版本

要构建生产版本的网站：

```bash
npm run docs:build
# 或
yarn docs:build
```

构建完成后，可以使用以下命令预览生产版本：

```bash
npm run docs:preview
# 或
yarn docs:preview
```

## 目录结构

```
dish-ai-commit-website/
├── docs/                    # 文档源文件
│   ├── .vitepress/          # VitePress 配置文件
│   │   ├── config.js        # 主配置文件
│   │   └── public/          # 静态资源
│   │       └── images/      # 图片资源
│   ├── index.md             # 首页
│   ├── guide/               # 指南文档
│   └── config/              # 配置文档
└── package.json             # 项目依赖和脚本
```

## 贡献指南

我们欢迎社区贡献！如果您想要改进文档或添加新内容：

1. Fork 此仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-improvement`)
3. 提交您的更改 (`git commit -m 'Add some amazing improvement'`)
4. 推送到分支 (`git push origin feature/amazing-improvement`)
5. 创建一个 Pull Request

## 许可证

MIT
