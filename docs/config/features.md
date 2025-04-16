# 功能配置

Dish AI Commit Gen 提供了多种功能配置选项，让您可以根据自己的需求和偏好自定义扩展的行为。

## 提交消息格式配置

### 表情符号支持

您可以启用或禁用提交消息中的表情符号：

```json
{
  "dish-ai-commit.features.commitFormat.enableEmoji": true
}
```

当启用此功能时，AI 将根据提交类型自动添加相应的表情符号：

- ✨ feat: 新功能
- 🐛 fix: 修复 bug
- 📝 docs: 文档
- 💄 style: 样式
- ♻️ refactor: 重构
- ⚡️ perf: 性能
- ✅ test: 测试
- 🔧 chore: 其他改动

### 合并提交

启用此功能后，AI 将能够将多个相关文件的更改合并为一个提交消息：

```json
{
  "dish-ai-commit.features.commitFormat.enableMergeCommit": true
}
```

当处理涉及多个文件的相关更改时，启用此功能可以生成更简洁、更有条理的提交消息，而不是为每个文件单独生成消息。

## 代码分析配置

### 差异内容简化

如果您的更改包含大量代码，可以启用差异内容简化功能，以帮助 AI 更好地理解关键更改：

```json
{
  "dish-ai-commit.features.codeAnalysis.simplifyDiff": true
}
```

启用此功能后，AI 会智能分析代码变更，提取关键信息，忽略不重要的细节，从而生成更准确的提交消息。

## 周报生成配置

### 自定义周报模板

您可以通过 `weeklyReport.systemPrompt` 自定义周报的生成模板：

```json
{
  "dish-ai-commit.features.weeklyReport.systemPrompt": "请根据以下提交记录，生成一份包含以下部分的周报：1. 本周完成工作总结，2. 遇到的问题及解决方案，3. 下周计划。按项目分类汇总工作内容，使用简洁专业的语言。"
}
```

自定义周报提示可以帮助您获得更符合团队或个人报告风格的周报内容。

## 分支名称生成配置

### 分支名称格式

您可以通过 `branchName.format` 配置项设置生成的分支名称格式：

```json
{
  "dish-ai-commit.features.branchName.format": "{type}/{description}"
}
```

支持的格式变量：

- `{type}`: 分支类型 (feature, bugfix, hotfix 等)
- `{description}`: 分支描述
- `{issue}`: 相关的问题编号

### 分支名称风格

您可以通过 `branchName.style` 配置项设置生成的分支名称风格：

```json
{
  "dish-ai-commit.features.branchName.style": "kebab-case"
}
```

支持的风格：

- `kebab-case`: 使用连字符分隔单词 (例如：feature/add-new-button)
- `camelCase`: 使用驼峰命名法 (例如：feature/addNewButton)
- `snake_case`: 使用下划线分隔单词 (例如：feature/add_new_button)

## 代码审查配置

### 审查深度

您可以通过 `codeReview.depth` 配置项设置代码审查的深度：

```json
{
  "dish-ai-commit.features.codeReview.depth": "detailed"
}
```

支持的深度：

- `basic`: 快速审查，只关注明显问题
- `standard`: 标准深度审查，平衡速度和详细程度
- `detailed`: 详细审查，包括代码质量、可维护性和最佳实践建议

### 自定义审查重点

您可以通过 `codeReview.focus` 配置项设置代码审查的重点领域：

```json
{
  "dish-ai-commit.features.codeReview.focus": [
    "security",
    "performance",
    "readability"
  ]
}
```

支持的重点领域：

- `security`: 安全性问题
- `performance`: 性能优化
- `readability`: 代码可读性
- `testing`: 测试覆盖率
- `architecture`: 架构设计
- `standards`: 代码标准遵循

## 综合配置示例

以下是一个包含多种功能配置的综合示例：

```json
{
  // 基础配置
  "dish-ai-commit.base.language": "简体中文",
  "dish-ai-commit.base.provider": "openai",

  // 提交格式
  "dish-ai-commit.features.commitFormat.enableEmoji": true,
  "dish-ai-commit.features.commitFormat.enableMergeCommit": true,

  // 代码分析
  "dish-ai-commit.features.codeAnalysis.simplifyDiff": true,

  // 周报配置
  "dish-ai-commit.features.weeklyReport.systemPrompt": "生成简洁明了的周报，按项目分类总结工作内容",

  // 分支名称生成
  "dish-ai-commit.features.branchName.format": "{type}/{description}",
  "dish-ai-commit.features.branchName.style": "kebab-case"
}
```
