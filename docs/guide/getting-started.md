# 快速开始

本指南将帮助您快速安装和配置 Dish AI Commit Gen 扩展，以便在几分钟内开始使用 AI 生成标准化的提交消息。

## 1. 安装扩展

1.  打开 VS Code (需要 1.92.0 或更高版本)。
2.  转到扩展视图 (`Ctrl+Shift+X` 或 `Cmd+Shift+X`)。
3.  在搜索框中输入 "Dish AI Commit"。
4.  点击“安装”按钮。

或者，您也可以直接从 [VS Code 市场](https://marketplace.visualstudio.com/items?itemName=littleCareless.dish-ai-commit)安装。

## 2. 基础配置

安装后，您需要配置一个 AI 服务才能开始使用。

1.  打开 VS Code 设置 (`Ctrl+,` 或 `Cmd+,`)。
2.  搜索 `dish-ai-commit`。
3.  至少填入以下三个核心设置：
    - **`dish-ai-commit.base.provider`**: 选择您的 AI 提供商，例如 `OpenAI`。
    - **`dish-ai-commit.base.model`**: 填入您想使用的模型，例如 `gpt-3.5-turbo`。
    - **`dish-ai-commit.providers.openai.apiKey`**: 填入您选择的 AI 提供商的 API 密钥。

> 想要了解所有配置选项的详细信息？请查阅我们的[**详细配置**](../config/configuration.md)指南。

## 3. 基本使用

### 生成提交消息

这是插件的核心功能。当您在源代码管理器中有暂存的更改时：

1.  点击源代码管理器标题栏中的 **"Dish AI Commit"** 图标。
2.  插件会首先显示一个提示，告知您当前内容的**提示词长度**以及所选模型的**最大输入限制**，帮助您判断内容是否过长。
3.  接下来，AI 将开始分析您的代码变更。这个过程支持两种模式：
    - **流式生成**: AI 会像打字机一样，逐字生成提交信息并实时填充到输入框中。
    - **函数调用模式**: 如果您在设置中启用了此实验性功能，并且模型支持，插件会使用此模式来生成结构更精确的提交信息。
4.  等待几秒钟，一条符合规范的提交消息就会自动生成。

### 打开设置页面

我们提供了一个强大的图形化设置页面来管理实验性功能，如**代码库索引**。

1.  按下 `Ctrl+Shift+P` 或 `Cmd+Shift+P` 打开命令面板。
2.  输入 `Dish AI Commit: 打开设置页面` 并选择。

## 下一步

恭喜您完成了基本设置！现在您可以开始探索 Dish AI Commit Gen 的更多强大功能了：

- 了解如何开启并使用[**代码库索引**](./code-indexing.md)来增强 AI 的上下文理解能力。
- 查看所有可用的[**AI 提供商**](./ai-providers.md)和它们的特定配置。
- 探索如何生成[**周报**](./weekly-report.md)和[**分支名称**](./branch-name.md)。
- 查阅完整的[**详细配置**](../config/configuration.md)文档。