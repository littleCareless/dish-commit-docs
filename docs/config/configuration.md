# 详细配置

Dish AI Commit Gen 提供了两种配置方式，以满足不同场景的需求：

- **扩展设置**: 通过 VS Code 的 `settings.json` 文件进行配置，通常用于定义全局或项目级别的基础行为。
- **工作区设置**: 通过插件的设置页面进行管理，主要用于配置实验性功能和需要动态更新的选项。

---

## 工作区设置 (通过设置页面)

我们强烈建议通过插件的图形化设置页面来管理这些配置。

**如何打开设置页面:**

1.  按下 `Ctrl+Shift+P` 或 `Cmd+Shift+P` 打开命令面板。
2.  输入 `Dish AI Commit: 打开设置页面` 并选择。

### 实验性功能

#### 代码库索引 (`experimental.codeIndex`)

- **启用索引 (`enabled`)**: 启用后，插件会对您的项目代码进行索引，为 AI 提供更丰富的上下文，以生成更高质量的提交。
- **嵌入服务提供商 (`embeddingProvider`)**: 选择用于代码向量化的服务。支持 `OpenAI` 和 `Ollama`。
- **嵌入模型 (`embeddingModel`)**: 选择具体的嵌入模型。
- **Qdrant URL (`qdrantUrl`)**: 您的 Qdrant 向量数据库实例地址。
- **Qdrant API 密钥 (`qdrantApiKey`)**: 访问 Qdrant 数据库的 API 密钥（如果需要）。

> **功能详情**
>
> - **功能**: 代码库索引通过处理和索引您的项目代码，为 AI 提供更丰富的上下文信息。这使得 AI 能够更深入地理解您的代码库，从而在生成代码或执行其他与代码相关的任务时，能够利用整个项目的知识。
> - **优点**:
>   - 提高 AI 响应的准确性和相关性。
>   - 能够就整个代码库提出问题，而不仅限于当前打开的文件。
>   - 生成的代码能更好地与现有代码风格、函数和模式保持一致。
> - **缺点**:
>   - 索引过程可能会消耗较多的计算资源。
>   - 对于大型代码库，初次索引可能需要较长时间。
>   - 使用基于 API 的嵌入服务（如 OpenAI）会消耗额度。
>   - 需要设置和维护一个向量数据库 (Qdrant)。

#### 使用函数调用生成提交 (`experimental.commitWithFunctionCalling`)

- **启用函数调用 (`enabled`)**: 启用后，插件将利用 AI 模型的函数调用（Function Calling）能力来生成结构化且更精确的提交信息。

> **功能详情**
>
> - **功能**: AI 不再仅仅生成自由文本，而是可以调用预定义的“函数”来获取所需信息并按指定格式输出，从而更好地遵循提交规范。
> - **优点**:
>   - 生成更高质量、格式更一致的提交信息。
>   - AI 能更准确地理解并遵循 Conventional Commits 等提交规范。
>   - 减少手动修改 AI 生成的提交信息所需的时间。
> - **缺点**:
>   - 并非所有 AI 模型都支持函数调用功能。
>   - 与纯文本生成相比，可能会有轻微的延迟。

---

## 扩展设置 (`settings.json`)

这些是定义插件基础行为的配置项，您可以在 VS Code 的 `settings.json` 文件中进行修改。

### 基础配置 (`base`)

- **`dish-ai-commit.base.provider`**: 选择 AI 服务提供商。
  - **默认值**: `"OpenAI"`
  - **可选值**: `"OpenAI"`, `"Ollama"`, `"VS Code Provided"`, `"Zhipu"`, `"DashScope"`, `"Doubao"`, `"Gemini"`, `"Deepseek"`, `"Siliconflow"`, `"OpenRouter"`
- **`dish-ai-commit.base.model`**: 指定使用的 AI 模型。
  - **默认值**: `"gpt-3.5-turbo"`
- **`dish-ai-commit.base.language`**: 生成提交信息的语言。
  - **默认值**: `"Simplified Chinese"`
  - **支持**: 19 种语言，包括简体中文、繁体中文、英语、日语等。

### AI 提供商配置 (`providers`)

每个提供商都有其特定的配置，通常是 API 密钥和基础地址。

- **`dish-ai-commit.providers.openai.apiKey`**: OpenAI API 密钥。
- **`dish-ai-commit.providers.openai.baseUrl`**: OpenAI API 基础地址。
- **`dish-ai-commit.providers.zhipu.apiKey`**: 智谱 AI API 密钥。
- **`dish-ai-commit.providers.dashscope.apiKey`**: 灵积 API 密钥。
- **`dish-ai-commit.providers.doubao.apiKey`**: 豆包 API 密钥。
- **`dish-ai-commit.providers.ollama.baseUrl`**: Ollama API 基础地址。
- **`dish-ai-commit.providers.gemini.apiKey`**: Gemini AI API 密钥。
- **`dish-ai-commit.providers.deepseek.apiKey`**: Deepseek AI API 密钥。
- **`dish-ai-commit.providers.siliconflow.apiKey`**: SiliconFlow AI API 密钥。
- **`dish-ai-commit.providers.openrouter.apiKey`**: OpenRouter AI API 密钥。

### 功能配置 (`features`)

#### 代码分析 (`codeAnalysis`)

- **`dish-ai-commit.features.codeAnalysis.simplifyDiff`**: 是否启用差异内容简化。
  - **默认值**: `false`
  - **警告**: 启用此功能可能导致提交信息不够准确。

#### 提交格式 (`commitFormat`)

- **`dish-ai-commit.features.commitFormat.enableEmoji`**: 在提交信息中使用表情符号。
  - **默认值**: `true`
- **`dish-ai-commit.features.commitFormat.enableMergeCommit`**: 允许将多个文件的更改合并为单个提交信息。
  - **默认值**: `false`
- **`dish-ai-commit.features.commitFormat.enableBody`**: 在提交信息中包含主体内容。
  - **默认值**: `true`
- **`dish-ai-commit.features.commitFormat.enableLayeredCommit`**: 生成分层提交信息，包含全局摘要和每个文件的详细描述。
  - **默认值**: `false`

#### 自定义提示 (`systemPrompt`)

您可以为不同的功能提供自定义的系统提示语。

- **`dish-ai-commit.features.commitMessage.systemPrompt`**: 提交信息生成的系统提示。
- **`dish-ai-commit.features.commitMessage.useRecentCommitsAsReference`**: 是否使用最近的提交作为生成提交信息的参考。
  - **默认值**: `false`
- **`dish-ai-commit.features.weeklyReport.systemPrompt`**: 生成周报的系统提示。
- **`dish-ai-commit.features.codeReview.systemPrompt`**: 代码审查的系统提示。
- **`dish-ai-commit.features.branchName.systemPrompt`**: 分支名称生成的系统提示。
- **`dish-ai-commit.features.prSummary.systemPrompt`**: PR 摘要生成的系统提示。

#### PR 摘要 (`prSummary`)

- **`dish-ai-commit.features.prSummary.baseBranch`**: 用于生成 PR 摘要的基础分支。
  - **默认值**: `"origin/main"`
- **`dish-ai-commit.features.prSummary.headBranch`**: 用于生成 PR 摘要的头部分支。
  - **默认值**: `"HEAD"`
- **`dish-ai-commit.features.prSummary.commitLogLimit`**: 在未提供范围时，为 SVN 获取提交日志的最大数量。
  - **默认值**: `20`