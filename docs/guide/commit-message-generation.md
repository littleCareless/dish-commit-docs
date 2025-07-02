# 提交消息生成

Dish AI Commit Gen 的核心功能是利用人工智能 (AI) 技术，根据您的代码变更自动生成符合行业规范的提交消息。这不仅能显著提高开发效率，还能确保团队内部提交消息的一致性和专业性。

## 功能介绍

提交消息生成功能通过分析您暂存的代码更改 (diff)，智能识别变更的类型（如新功能、bug 修复、代码重构等）、影响范围（作用域）以及具体的修改内容。随后，结合您的配置（如语言偏好、表情符号设置等），AI 会构建出一条结构清晰、信息明确的提交消息。

此功能与 Dish AI Commit Gen 支持的多种 AI 提供商无缝集成，包括 OpenAI、Ollama (本地模型)、VSCode 内置 AI (GitHub Copilot)、智谱 AI、Gemini AI 等。您可以根据项目的具体需求、预算及数据隐私考量，灵活选择最合适的 AI 服务。

## 基本使用

生成提交消息非常简单，主要有两种方式：

1.  **通过源代码管理器 (SCM)**:
    *   在 VS Code 的源代码管理器中，完成文件暂存 (git add)。
    *   您可以通过以下任一方式触发提交消息生成：
        *   点击 SCM 视图顶部操作栏中的 "[Dish] Generate Commit with AI" 图标 (通常显示为 [`/images/icon.svg`](gw-commit-website/docs/public/images/icon.svg) )。
        *   在暂存的文件或文件组上右键单击，从上下文菜单中选择 "[Dish] Generate Commit with AI"。
    *   AI 将分析暂存的更改，并在几秒钟内将生成的提交消息自动填充到提交信息框中。

2.  **通过命令面板**:
    *   按下 `Ctrl+Shift+P` (Windows/Linux) 或 `Cmd+Shift+P` (macOS) 打开命令面板。
    *   输入 "[Dish] Generate Commit with AI" 并选择该命令。
    *   AI 将执行相同的分析和生成过程。

## AI 如何工作

当您触发提交消息生成时，扩展会执行以下步骤：

1.  **获取变更**: 收集所有已暂存文件的代码差异信息。
2.  **代码分析**: AI 模型会深入分析这些差异，试图理解：
    *   修改的性质：是添加新功能、修复错误、改进性能，还是文档更新等。
    *   变更的范围：影响了哪些模块或组件。
    *   关键的修改点：具体修改了哪些函数、类或逻辑。
    *   更详细的分析机制可以参考 [代码分析](./code-analysis.md) 文档。
3.  **应用配置**: 结合用户在 VS Code 设置中定义的偏好，这些配置直接影响 AI 的行为和生成结果，例如：
    *   选择的 AI 提供商和模型 (通过 `dish-ai-commit.base.provider` 和 `dish-ai-commit.base.model` 配置)。
    *   提交消息语言 (通过 `dish-ai-commit.base.language` 配置，详情参考：[多语言支持](./languages.md))。
    *   是否启用表情符号 (通过 `dish-ai-commit.features.commitFormat.enableEmoji` 配置，详情参考：[表情符号](./emoji.md))。
    *   自定义的系统提示词 (通过 `dish-ai-commit.features.commitMessage.systemPrompt` 配置)。
    *   代码分析相关的设置，如是否简化差异内容 (通过 `dish-ai-commit.features.codeAnalysis.simplifyDiff` 配置)。
    *   提交消息结构相关的设置，如是否启用合并提交 (通过 `dish-ai-commit.features.commitFormat.enableMergeCommit` 配置)、是否包含消息体 (通过 `dish-ai-commit.features.commitFormat.enableBody` 配置)、以及是否启用分层提交 (通过 `dish-ai-commit.features.commitFormat.enableLayeredCommit` 配置)。
4.  **构建消息**: 根据分析结果和配置，生成一条符合 [Conventional Commits](https://www.conventionalcommits.org/) 规范的提交消息。

## 提交消息格式

生成的提交消息严格遵循 Conventional Commits 规范，其基本结构如下：

```
<类型>[可选作用域]: <描述>

[可选正文]

[可选脚注]
```

支持的提交类型包括：

*   `feat`: 新功能
*   `fix`: 修复 bug
*   `docs`: 文档更改
*   `style`: 代码样式调整 (不影响代码含义的更改，如空格、格式化、缺少分号等)
*   `refactor`: 代码重构 (既不是修复 bug 也不是添加新功能的代码更改)
*   `perf`: 性能改进
*   `test`: 添加缺失的测试或更正现有测试
*   `build`: 影响构建系统或外部依赖项的更改 (例如：gulp, broccoli, npm)
*   `ci`: 对 CI 配置文件和脚本的更改 (例如：Travis, Circle, BrowserStack, SauceLabs)
*   `chore`: 其他不修改 `src` 或测试文件的更改
*   `revert`: 恢复先前的提交

默认情况下，会在提交类型前添加相应的[表情符号](./emoji.md)，以增强可读性。

## 支持的 AI 提供商

您可以灵活选择多种 AI 服务来驱动提交消息的生成。详细的提供商列表和配置方法，请参阅 [AI 提供商配置指南](./ai-providers.md)。

## 多语言支持

Dish AI Commit Gen 支持生成多种语言的提交消息，满足全球化团队的需求。具体支持的语言列表和设置方法，请查阅 [多语言支持](./languages.md) 文档。

## 高级功能与配置

### 合并提交与分层提交

对于涉及多个文件的单次提交，您可以配置扩展以更智能地处理：

*   **合并提交 (`enableMergeCommit`)**: 当启用时，AI 会尝试理解多个文件变更之间的关联，并生成一个统一的、概括性的提交消息。
*   **分层提交 (`enableLayeredCommit`)**: 在合并提交的基础上，此选项会额外为每个被修改的文件生成单独的、更详细的变更描述，作为主提交消息的补充。

更多信息请参考 [合并提交](./merge-commit.md) 指南。

### 自定义系统提示

通过修改 `dish-ai-commit.features.commitMessage.systemPrompt` 配置项，您可以为 AI 提供更具体的指令，以调整生成提交消息的风格、侧重点或包含特定信息。

例如，您可以要求 AI：
*   始终包含某个特定的项目标识符。
*   对特定类型的文件变更采用不同的描述方式。
*   强调变更对用户体验的影响。

### 参考最近的提交历史

**这是一个非常有用的新功能**。通过启用此选项，AI 在生成新的提交信息之前，会先分析您和您所在仓库最近的提交记录。这有助于 AI 学习并模仿您项目特有的提交风格、术语和格式，从而生成更“地道”、更一致的提交信息。

要启用此功能，请在您的 `settings.json` 中进行如下配置：

```json
{
  "dish-ai-commit.features.commitMessage.useRecentCommitsAsReference": true
}
```

*   **默认值**: `false`

启用后，插件会自动获取最近的用户提交和仓库提交，并将其作为上下文的一部分提供给 AI。AI 不会直接复制这些历史提交，而是将其作为风格和格式的参考。

### 提交消息体

您可以控制是否允许 AI 生成提交消息的正文部分：

```json
{
  "dish-ai-commit.features.commitFormat.enableBody": true // 设置为 false 则只生成摘要行
}
```

### 自动作用域检测

扩展会尝试从修改的文件路径和内容中自动推断提交的作用域。例如，对 `src/components/auth/LoginForm.js` 文件的修改可能会被自动识别为 `auth` 或 `LoginForm` 作用域。

## 最佳实践

1.  **原子提交**: 尽量确保每次提交都集中于一个独立的任务或功能点。这有助于 AI 更准确地理解变更意图。
2.  **清晰的暂存区**: 在生成提交消息前，确保暂存区只包含相关的更改。
3.  **选择合适的 AI 模型**: 不同的 AI 模型在理解复杂代码变更和遵循指令方面能力各异。如果默认模型的生成质量不理想，可以尝试切换到更高级的模型（如 GPT-4）或针对特定语言优化的模型。
4.  **利用自定义提示**: 如果团队有特定的提交消息要求，善用系统提示词进行引导。
5.  **检查与微调**: AI 生成的消息是一个很好的起点，但在提交前快速阅读并进行必要的微调，可以确保最终消息的准确性和专业性。
6.  **迭代优化配置**: 根据团队反馈和使用体验，持续调整扩展的配置项，以达到最佳的生成效果。

通过遵循这些实践，您可以最大限度地发挥 Dish AI Commit Gen 的潜力，使提交消息生成过程更加高效和智能。