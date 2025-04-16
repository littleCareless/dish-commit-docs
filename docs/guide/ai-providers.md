# AI 提供商

Dish AI Commit Gen 支持多种 AI 服务提供商，您可以根据自己的需求、预算和数据隐私要求选择最适合的解决方案。

## 支持的 AI 提供商

### OpenAI (GPT-3.5/GPT-4)

OpenAI 提供高质量的语言模型，以其出色的代码理解能力而著称。

- **优势**：优秀的代码理解和分析能力，生成高质量提交消息
- **适用场景**：需要高质量提交消息的项目团队
- **模型选项**：
  - `gpt-3.5-turbo`：平衡性能和成本
  - `gpt-4`：最高质量输出，但成本较高
  - `gpt-4o`：新一代模型，结合了质量和性能

[配置 OpenAI >](../config/ai-providers#openai)

### Ollama (本地模型)

Ollama 允许您在本地运行开源大型语言模型，无需将代码发送到云端。

- **优势**：完全本地部署，无网络依赖，数据隐私保护
- **适用场景**：对数据隐私有高要求的项目，企业内部代码库
- **模型选项**：
  - `llama2`：Meta 的开源大语言模型
  - `codellama`：专为代码优化的 Llama 变体
  - `mistral`：高性能开源模型
  - 其他 Ollama 支持的开源模型

[配置 Ollama >](../config/ai-providers#ollama-本地模型)

### VSCode 内置 AI (GitHub Copilot)

使用 VSCode 内置的 AI 服务，基于 GitHub Copilot。

- **优势**：无需额外 API Key，与 VSCode 完美集成
- **适用场景**：已订阅 GitHub Copilot 的开发者
- **前提条件**：需要有效的 GitHub Copilot 订阅

[配置 VSCode AI >](../config/ai-providers#vscode-内置-ai-github-copilot)

### 智谱 AI (GLM-4)

智谱 AI 提供了专为中文优化的大语言模型，具有出色的中文处理能力。

- **优势**：优秀的中文理解能力，固定月度免费额度
- **适用场景**：中国用户，需要高质量中文提交消息的团队
- **模型选项**：
  - `glm-4`：高性能通用大语言模型
  - `glm-4-flash`：轻量级快速模型，适合简单任务

[配置智谱 AI >](../config/ai-providers#智谱-ai-glm-4)

### DashScope (阿里云通义千问)

阿里云提供的通义千问系列模型，具有良好的中文处理能力和企业级可靠性。

- **优势**：稳定的企业级服务，良好的中文支持
- **适用场景**：企业项目，需要稳定 AI 服务的团队
- **模型选项**：
  - `qwen-turbo`：通义千问轻量级模型
  - `qwen-plus`：通义千问增强版模型

[配置 DashScope >](../config/ai-providers#dashscope-阿里云通义千问)

### Gemini AI

Google 提供的 Gemini AI 服务，每天提供 1500 次免费请求额度。

- **优势**：每日大量免费请求，性能稳定
- **适用场景**：个人开发者，小型团队
- **模型选项**：
  - `gemini-pro`：Gemini 专业版模型

[配置 Gemini AI >](../config/ai-providers#gemini-ai)

### Deepseek AI

Deepseek AI 提供高质量的开源大模型，同时对中英文均有良好优化。

- **优势**：优秀的多语言支持，开源底层模型
- **适用场景**：多语言开发团队，国际化项目
- **模型选项**：
  - `deepseek-coder`：专为代码优化的模型
  - `deepseek-chat`：通用对话模型

[配置 Deepseek AI >](../config/ai-providers#更多-ai-提供商)

### SiliconFlow

SiliconFlow 是一个高性能 AI 推理平台，支持多种模型。

- **优势**：高性能，多模型支持
- **适用场景**：需要灵活选择模型的团队
- **模型选项**：请参考 SiliconFlow 官方文档

[配置 SiliconFlow >](../config/ai-providers#更多-ai-提供商)

### OpenRouter

OpenRouter 是一个开源 AI 路由服务，支持多种模型的访问。

- **优势**：单一 API 访问多种模型，灵活选择
- **适用场景**：需要经常切换模型的开发者
- **模型选项**：OpenRouter 支持的全部模型

[配置 OpenRouter >](../config/ai-providers#更多-ai-提供商)

## 选择适合您的 AI 提供商

在选择 AI 提供商时，请考虑以下因素：

1. **数据隐私要求**：如果您的代码包含敏感信息，考虑使用 Ollama 本地模型
2. **语言需求**：对于中文项目，智谱 AI 或 DashScope 可能提供更好的中文理解
3. **预算限制**：考虑使用提供免费额度的服务，如 Gemini AI 或智谱 AI
4. **模型质量**：对于需要高质量输出的场景，OpenAI 的 GPT-4 可能是更好的选择
5. **网络访问**：确保您的网络环境可以访问所选 AI 服务的 API 端点

您可以随时通过命令面板切换 AI 提供商：按下 `Ctrl+Shift+P` 或 `Cmd+Shift+P`，然后输入 "Dish AI Commit: 选择提交生成的 AI 模型"。
