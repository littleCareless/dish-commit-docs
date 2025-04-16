# 基础配置

Dish AI Commit Gen 提供了丰富的配置选项，让您可以根据自己的需求进行个性化设置。本页面介绍基础配置选项。

## 全局设置

以下是 Dish AI Commit Gen 的核心全局设置：

| 配置项                           | 类型   | 默认值        | 描述           |
| -------------------------------- | ------ | ------------- | -------------- |
| dish-ai-commit.base.language     | string | 简体中文      | 提交消息语言   |
| dish-ai-commit.base.systemPrompt | string | ""            | 自定义系统提示 |
| dish-ai-commit.base.provider     | string | OpenAI        | AI 提供商      |
| dish-ai-commit.base.model        | string | gpt-3.5-turbo | AI 模型        |

## 语言设置

`dish-ai-commit.base.language` 支持以下 19 种语言：

- 简体中文 (简体中文)
- 繁體中文 (繁體中文)
- 日语 (日本語)
- 韩语 (한국어)
- 捷克语 (Čeština)
- 德语 (Deutsch)
- 法语 (Français)
- 意大利语 (Italiano)
- 荷兰语 (Nederlands)
- 葡萄牙语 (Português)
- 越南语 (Tiếng Việt)
- 英语
- 西班牙语 (Español)
- 瑞典语 (Svenska)
- 俄语 (Русский)
- 印度尼西亚语 (Bahasa Indonesia)
- 波兰语 (Polski)
- 土耳其语 (Türkçe)
- 泰语 (ไทย)

示例配置：

```json
{
  "dish-ai-commit.base.language": "英语"
}
```

## 自定义系统提示

您可以通过 `dish-ai-commit.base.systemPrompt` 配置项自定义系统提示，以便更精确地控制 AI 生成的提交消息风格和内容。

示例配置：

```json
{
  "dish-ai-commit.base.systemPrompt": "生成简洁明了的提交消息，重点突出修改的核心内容，使用技术术语，避免过多解释。"
}
```

## AI 提供商和模型

您可以通过 `dish-ai-commit.base.provider` 和 `dish-ai-commit.base.model` 配置项选择 AI 提供商和模型。

支持的 AI 提供商：

- openai（默认）
- ollama
- vscode (GitHub Copilot)
- zhipu（智谱 AI）
- dashscope（阿里云通义千问）
- gemini (Google Gemini)
- deepseek
- siliconflow
- openrouter

每个 AI 提供商支持不同的模型，详情请参阅 [AI 提供商配置](./ai-providers)。

示例配置：

```json
{
  "dish-ai-commit.base.provider": "openai",
  "dish-ai-commit.base.model": "gpt-4"
}
```
