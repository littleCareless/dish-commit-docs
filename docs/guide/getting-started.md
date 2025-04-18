# 快速开始

本指南将帮助您快速安装和配置 Dish AI Commit Gen 扩展，以便在几分钟内开始使用 AI 生成标准化的提交消息。

## 安装扩展

1. 打开 VS Code (需要 VS Code 1.92.0 或更高版本)
2. 转到扩展视图（按 `Ctrl+Shift+X` 或 `Cmd+Shift+X`）
3. 在搜索框中输入 "Dish AI Commit"
4. 点击 "安装" 按钮

或者，您也可以直接从 [VS Code 市场](https://marketplace.visualstudio.com/items?itemName=littleCareless.dish-ai-commit) 安装。

安装后，您将可以访问多种功能，包括提交消息生成、周报生成、代码审查和分支名称生成等。

## 配置 AI 服务

Dish AI Commit Gen 支持多种 AI 服务提供商，您需要选择一个并进行配置。

### 选择并配置 AI 提供商

1. 打开 VS Code 设置（按 `Ctrl+,` 或 `Cmd+,`）
2. 搜索 "dish-ai-commit"
3. 在 `dish-ai-commit.base.provider` 设置中选择您想要使用的 AI 提供商

### 常用 AI 提供商配置示例

#### OpenAI (GPT-3.5/GPT-4)

```json
{
  "dish-ai-commit.base.provider": "openai",
  "dish-ai-commit.providers.openai.apiKey": "your-api-key",
  "dish-ai-commit.providers.openai.baseUrl": "https://api.openai.com/v1"
}
```

#### 智谱 AI (GLM-4)

```json
{
  "dish-ai-commit.base.provider": "zhipu",
  "dish-ai-commit.providers.zhipu.apiKey": "your-api-key"
}
```

#### Gemini AI

```json
{
  "dish-ai-commit.base.provider": "gemini",
  "dish-ai-commit.providers.gemini.apiKey": "your-api-key"
}
```

#### Ollama（本地模型）

```json
{
  "dish-ai-commit.base.provider": "ollama",
  "dish-ai-commit.base.model": "llama2", // 或其他你已部署的模型
  "dish-ai-commit.providers.ollama.baseUrl": "http://localhost:11434"
}
```

#### VSCode 内置 AI (Github Copilot)

```json
{
  "dish-ai-commit.base.provider": "vscode"
}
```

## 基本使用

### 生成提交消息

1. 在源代码管理器中选择要提交的文件
2. 点击源代码管理器标题栏中的 "Dish AI Commit" 图标
3. 等待几秒钟，AI 将自动分析您的更改并生成提交消息
4. 生成的消息将自动填充到提交消息输入框中

您也可以通过命令面板执行此操作：

1. 按下 `Ctrl+Shift+P` 或 `Cmd+Shift+P` 打开命令面板
2. 输入 "Dish AI Commit: 生成提交信息" 并选择

### 生成分支名称

1. 按下 `Ctrl+Shift+P` 或 `Cmd+Shift+P` 打开命令面板
2. 输入 "Dish AI Commit: 生成分支名称" 并选择
3. 输入功能或任务描述
4. AI 将生成符合规范的分支名称

### 生成周报

1. 按下 `Ctrl+Shift+P` 或 `Cmd+Shift+P` 打开命令面板
2. 输入 "Dish AI Commit: 生成周报" 并选择
3. 选择时间范围
4. AI 将基于您的提交记录自动生成周报

## 语言设置

您可以根据自己的偏好设置提交消息的语言：

```json
{
  "dish-ai-commit.base.language": "简体中文" // 支持 19 种不同语言
}
```

## 下一步

- 了解更多[AI 提供商配置](./ai-providers)
- 探索[多语言支持](./languages)
- 定制[周报生成](./weekly-report)模板
- 学习如何[生成分支名称](./branch-name)
