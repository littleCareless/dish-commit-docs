# 分支名称生成

Dish AI Commit Gen 提供智能分支名称生成功能，帮助团队保持一致的命名规范，提高代码库的可维护性。

## 功能介绍

分支名称生成功能基于需求或功能描述，使用 AI 自动创建符合规范的 Git 分支名称。系统会分析您的描述内容，提取关键信息，并以标准化的格式生成分支名称。此功能支持多种 AI 提供商，包括 OpenAI、VSCode 内置 AI、智谱 AI、Gemini AI 等，并提供自定义系统提示选项，可以根据团队的具体命名规范进行调整。

在 v0.12.4 版本中，分支名称生成功能进一步增强了对各种命名风格的支持，并提供了更多自定义选项，以满足不同团队的分支命名规范需求。

## 基本使用

### 生成分支名称

1. 按下 `Ctrl+Shift+P`（Windows/Linux）或 `Cmd+Shift+P`（macOS）打开命令面板
2. 输入 "Dish AI Commit: 生成分支名称" 并选择
3. 在弹出的输入框中，输入您要实现的功能或修复的问题的描述
4. 等待几秒钟，AI 将自动分析您的描述并生成规范的分支名称
5. 您可以直接使用生成的分支名称，或根据需要进行编辑

例如，输入：

> 实现用户登录功能，支持邮箱和手机号登录，包括验证码发送和密码重置流程

可能会生成：

```
feature/user-login-with-email-phone-verification
```

## 分支名称格式配置

您可以通过配置 `dish-ai-commit.features.branchName.format` 选项来自定义分支名称的格式：

```json
{
  "dish-ai-commit.features.branchName.format": "{type}/{description}"
}
```

支持的格式变量：

- `{type}`: 分支类型 (feature, bugfix, hotfix 等)
- `{description}`: 分支描述
- `{issue}`: 相关的问题编号（如果在描述中提到）

### 格式示例

#### 标准格式

```json
{
  "dish-ai-commit.features.branchName.format": "{type}/{description}"
}
```

生成结果: `feature/user-login-implementation`

#### 包含问题编号

```json
{
  "dish-ai-commit.features.branchName.format": "{type}/{issue}/{description}"
}
```

生成结果: `feature/issue-42/user-login-implementation`

#### 简化格式

```json
{
  "dish-ai-commit.features.branchName.format": "{description}"
}
```

生成结果: `user-login-implementation`

## 分支名称风格配置

您可以通过配置 `dish-ai-commit.features.branchName.style` 选项来设置分支名称的命名风格：

```json
{
  "dish-ai-commit.features.branchName.style": "kebab-case"
}
```

支持的风格：

- `kebab-case`: 使用连字符分隔单词 (例如: feature/add-user-login)
- `camelCase`: 使用驼峰命名法 (例如: feature/addUserLogin)
- `snake_case`: 使用下划线分隔单词 (例如: feature/add_user_login)

## 常见分支类型

Dish AI Commit Gen 能够根据您的描述自动选择合适的分支类型，常见的分支类型包括：

| 分支类型 | 使用场景         | 示例                                   |
| -------- | ---------------- | -------------------------------------- |
| feature  | 新功能开发       | feature/user-authentication            |
| bugfix   | 修复非紧急 bug   | bugfix/login-validation-error          |
| hotfix   | 修复紧急生产问题 | hotfix/critical-security-vulnerability |
| release  | 版本发布准备     | release/v1.2.0                         |
| refactor | 代码重构         | refactor/optimize-database-queries     |
| docs     | 文档更新         | docs/api-reference-update              |
| test     | 添加或修改测试   | test/user-registration-tests           |
| chore    | 维护性工作       | chore/update-dependencies              |

## 高级用法

### 集成问题跟踪系统

如果您的团队使用 JIRA、GitHub Issues 或其他问题跟踪系统，可以在描述中包含问题编号，AI 将自动识别并纳入分支名称：

输入：

> JIRA-123: 实现用户资料编辑页面

生成结果可能是：

```
feature/JIRA-123-user-profile-editing-page
```

### 分支名称长度优化

AI 会自动优化生成的分支名称长度，提取关键信息，避免过长的分支名称：

输入：

> 实现一个新的用户注册流程，包括电子邮件验证、手机号验证、用户协议接受和隐私政策确认等多个步骤

会被简化为类似：

```
feature/user-registration-flow-with-verification
```

而不是包含所有细节的超长分支名称。

## 与团队工作流集成

### Git Flow 集成

如果您的团队使用 Git Flow 工作流，可以自定义系统提示词以生成符合 Git Flow 的分支名称：

```json
{
  "dish-ai-commit.base.systemPrompt": "根据描述生成符合 Git Flow 工作流规范的分支名称，对于新功能使用 'feature/'，bug 修复使用 'bugfix/'，紧急修复使用 'hotfix/'，发布准备使用 'release/'。"
}
```

### GitHub Flow 集成

对于使用 GitHub Flow 的团队，可以简化分支名称格式：

```json
{
  "dish-ai-commit.features.branchName.format": "{description}"
}
```

## 最佳实践

1. **简洁明了**：即使是自动生成的分支名称，也应该保持简洁明了，避免过长
2. **包含关键信息**：确保分支名称包含足够的信息，以便团队成员理解其用途
3. **保持一致性**：团队应统一分支命名规范，提高协作效率
4. **避免特殊字符**：分支名称应避免使用除连字符、下划线外的特殊字符
5. **考虑大小写敏感性**：记住某些系统对大小写敏感，选择适合团队的命名风格
