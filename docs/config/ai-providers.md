# AI 提供商配置

Dish AI Commit Gen 支持多种 AI 服务提供商，您可以根据自己的需求和可用资源选择合适的提供商。

## OpenAI

OpenAI 提供高质量的模型，如 GPT-3.5 和 GPT-4，是默认推荐的 AI 提供商。

### 配置参数

| 配置项                                  | 类型   | 默认值                    | 描述                |
| --------------------------------------- | ------ | ------------------------- | ------------------- |
| dish-ai-commit.providers.openai.apiKey  | string | ""                        | OpenAI API 密钥     |
| dish-ai-commit.providers.openai.baseUrl | string | https://api.openai.com/v1 | OpenAI API 基础 URL |

### 配置示例

```json
{
  "dish-ai-commit.base.provider": "openai",
  "dish-ai-commit.base.model": "gpt-3.5-turbo", // 或 "gpt-4"
  "dish-ai-commit.providers.openai.apiKey": "您的OpenAI API密钥",
  "dish-ai-commit.providers.openai.baseUrl": "https://api.openai.com/v1"
}
```

### 如何获取 API 密钥

1. 访问 [OpenAI 平台](https://platform.openai.com/)
2. 注册或登录您的账户
3. 进入 API Keys 页面
4. 点击 "Create new secret key" 创建新密钥
5. 将创建的密钥复制到配置中

## 智谱 AI (GLM-4)

智谱 AI 提供了优秀的中文处理能力，有固定的月度免费额度，适合中国用户使用。

### 配置参数

| 配置项                                | 类型   | 默认值 | 描述             |
| ------------------------------------- | ------ | ------ | ---------------- |
| dish-ai-commit.providers.zhipu.apiKey | string | ""     | 智谱 AI API 密钥 |

### 配置示例

```json
{
  "dish-ai-commit.base.provider": "zhipu",
  "dish-ai-commit.base.model": "glm-4", // 或 "glm-4-flash"
  "dish-ai-commit.providers.zhipu.apiKey": "您的智谱AI API密钥"
}
```

### 如何获取 API 密钥

1. 访问 [智谱 AI 开放平台](https://open.bigmodel.cn/)
2. 注册或登录您的账户
3. 进入用户中心 > API 密钥页面
4. 创建并复制 API 密钥

## Ollama (本地模型)

Ollama 允许您在本地运行开源大型语言模型，适合对数据隐私有高要求的场景。

### 配置参数

| 配置项                                  | 类型   | 默认值                 | 描述                |
| --------------------------------------- | ------ | ---------------------- | ------------------- |
| dish-ai-commit.providers.ollama.baseUrl | string | http://localhost:11434 | Ollama API 基础 URL |

### 配置示例

```json
{
  "dish-ai-commit.base.provider": "ollama",
  "dish-ai-commit.base.model": "llama2", // 或任何你在Ollama中安装的模型
  "dish-ai-commit.providers.ollama.baseUrl": "http://localhost:11434"
}
```

### 如何设置 Ollama

1. 从 [Ollama 官网](https://ollama.ai/) 下载并安装 Ollama
2. 运行 Ollama 并拉取所需模型，例如：`ollama pull llama2`
3. 确保 Ollama 服务在默认端口 (11434) 上运行
4. 配置 VS Code 扩展使用 Ollama

## Gemini AI

Gemini AI 是 Google 提供的 AI 模型，每天有 1500 次免费请求额度，适合个人开发者。

### 配置参数

| 配置项                                 | 类型   | 默认值 | 描述               |
| -------------------------------------- | ------ | ------ | ------------------ |
| dish-ai-commit.providers.gemini.apiKey | string | ""     | Gemini AI API 密钥 |

### 配置示例

```json
{
  "dish-ai-commit.base.provider": "gemini",
  "dish-ai-commit.base.model": "gemini-pro",
  "dish-ai-commit.providers.gemini.apiKey": "您的Gemini API密钥"
}
```

### 如何获取 API 密钥

1. 访问 [Google AI Studio](https://makersuite.google.com/app/apikey)
2. 注册或登录您的 Google 账户
3. 创建 API 密钥并复制到配置中

## VSCode 内置 AI (GitHub Copilot)

如果您已订阅 GitHub Copilot，可以直接使用 VS Code 内置的 AI 能力。

### 配置示例

```json
{
  "dish-ai-commit.base.provider": "vscode"
}
```

### 前提条件

1. 需要有有效的 GitHub Copilot 订阅
2. 已在 VS Code 中安装并登录 GitHub Copilot 扩展

## 更多 AI 提供商

Dish AI Commit Gen 还支持以下 AI 提供商：

### DashScope (阿里云通义千问)

```json
{
  "dish-ai-commit.base.provider": "dashscope",
  "dish-ai-commit.providers.dashscope.apiKey": "您的DashScope API密钥"
}
```

### Deepseek AI

```json
{
  "dish-ai-commit.base.provider": "deepseek",
  "dish-ai-commit.providers.deepseek.apiKey": "您的Deepseek API密钥"
}
```

### SiliconFlow

```json
{
  "dish-ai-commit.base.provider": "siliconflow",
  "dish-ai-commit.providers.siliconflow.apiKey": "您的SiliconFlow API密钥"
}
```

### OpenRouter

```json
{
  "dish-ai-commit.base.provider": "openrouter",
  "dish-ai-commit.providers.openrouter.apiKey": "您的OpenRouter API密钥"
}
```

## 切换 AI 提供商

您可以随时通过命令面板切换 AI 提供商：

1. 按下 `Ctrl+Shift+P` 或 `Cmd+Shift+P` 打开命令面板
2. 输入 "Dish AI Commit: 选择提交生成的 AI 模型" 并选择
3. 从列表中选择所需的 AI 提供商和模型
