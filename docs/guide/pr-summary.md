# PR 摘要生成

Dish AI Commit Gen v0.21.0 版本引入了一项新功能：**PR (Pull Request) 摘要生成**。此功能可以帮助开发者快速总结一个 PR 中的所有变更，自动生成清晰、简洁的摘要信息，从而提高代码审查的效率。

## 功能介绍

PR 摘要生成功能通过分析指定分支范围内的所有提交记录，利用 AI 技术提炼出关键的变更内容，并将其组织成结构化的摘要。这对于大型 PR 或包含复杂变更的 PR 尤其有用，可以让审查者在深入研究代码之前，快速了解 PR 的核心目的和主要改动。

该功能支持多种 AI 提供商，并允许用户在生成摘要前选择用于比较的基础分支，提供了足够的灵活性以适应不同的开发工作流。

## 基本使用

### 生成 PR 摘要

1.  按下 `Ctrl+Shift+P` (Windows/Linux) 或 `Cmd+Shift+P` (macOS) 打开命令面板。
2.  输入 `[Dish] Generate PR Summary with AI` 并选择该命令。
3.  **选择基础分支**:
    *   插件会自动获取您本地和远程的所有分支列表，并弹出一个快速选择框。
    *   您可以从中选择一个**基础分支** (例如 `main`、`develop` 或 `origin/main`)，用于与当前分支 (HEAD) 进行比较。
    *   默认的基础分支可以在[设置](#配置选项)中配置。
4.  **AI 分析与生成**:
    *   选择基础分支后，插件会收集这两个分支之间的所有提交消息。
    *   AI 将分析这些提交，并生成一份 PR 摘要。
5.  **查看结果**:
    *   生成的摘要将自动在一个新的编辑器窗口中打开，以 Markdown 格式显示。您可以直接复制并粘贴到 GitHub、GitLab 或其他平台的 PR 描述中。

## 配置选项

您可以通过 VS Code 的 `settings.json` 文件对 PR 摘要生成功能进行详细配置。

### 基础分支与头部分支

您可以预设用于比较的分支，以简化操作流程。

*   **`dish-ai-commit.features.prSummary.baseBranch`**: 设置默认的基础分支。
    *   **默认值**: `"origin/main"`
    *   **示例**: `"develop"`

*   **`dish-ai-commit.features.prSummary.headBranch`**: 设置默认的头部分支（即您希望合并的分支）。
    *   **默认值**: `"HEAD"` (表示当前所在的分支)

```json
{
  "dish-ai-commit.features.prSummary.baseBranch": "origin/develop",
  "dish-ai-commit.features.prSummary.headBranch": "my-feature-branch"
}
```

### 自定义系统提示

与插件的其他功能一样，您可以通过自定义系统提示来引导 AI 生成更符合您团队风格的 PR 摘要。

*   **`dish-ai-commit.features.prSummary.systemPrompt`**: 为 PR 摘要生成提供特定的指令。

```json
{
  "dish-ai-commit.features.prSummary.systemPrompt": "请根据以下提交记录，生成一份专业的 PR 摘要。摘要应包括以下部分：1. **主要变更**：总结此 PR 的核心目的。2. **详细改动**：以列表形式列出主要的提交内容。3. **潜在风险**：指出可能的风险或需要特别注意的地方。"
}
```

### 提交日志数量限制 (SVN)

对于 SVN 项目，由于其日志获取机制与 Git 不同，您可以设置一个获取提交记录数量的上限。

*   **`dish-ai-commit.features.prSummary.commitLogLimit`**: 当未提供特定范围时，为 SVN 获取提交日志的最大数量。
    *   **默认值**: `20`

## 示例输出

假设一个 PR 包含以下提交：

*   `feat: add user login component`
*   `fix: correct password validation logic`
*   `refactor: optimize token handling`

生成的 PR 摘要可能如下所示：

```markdown
# PR 摘要

本次更新主要围绕用户认证功能展开，引入了新的登录组件，并对现有的验证和令牌处理逻辑进行了优化和修复。

## 主要变更

*   **新功能**: 添加了完整的用户登录组件，支持用户名和密码认证。
*   **问题修复**: 修正了密码验证逻辑中的一个错误，提高了安全性。
*   **代码重构**: 优化了认证令牌的管理方式，使其更加高效和可靠。

## 如何测试

1.  访问 `/login` 页面。
2.  使用有效的凭据进行登录。
3.  尝试使用无效的密码，确认验证逻辑是否按预期工作。
```

## 最佳实践

1.  **保持高质量的提交消息**: PR 摘要的质量在很大程度上取决于原始提交消息的质量。使用本插件的[提交消息生成](./commit-message-generation.md)功能，可以确保您的提交历史清晰、规范。
2.  **定期同步远程分支**: 在生成摘要前，确保您的本地分支列表（特别是基础分支）是最新的 (`git fetch --all`)，以便做出正确的选择。
3.  **结合团队模板**: 使用自定义系统提示，将团队的 PR 模板固化到 AI 的指令中，以确保所有 PR 摘要的风格和格式保持一致。
