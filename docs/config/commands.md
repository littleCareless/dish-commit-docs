# 命令

Dish AI Commit Gen 提供了多个实用的命令，让您可以轻松使用其强大功能。以下是所有可用命令的详细说明和使用方法。

## 命令列表

| 命令 ID                              | 标题                   | 描述                           |
| ------------------------------------ | ---------------------- | ------------------------------ |
| dish-ai-commit.generateCommitMessage | 生成提交信息           | 生成符合规范的提交消息         |
| dish-ai-commit.selectModel           | 选择提交生成的 AI 模型 | 选择用于生成提交消息的 AI 模型 |
| dish-ai-commit.generateWeeklyReport  | 生成周报               | 生成 AI 驱动的每周工作报告     |
| dish-ai-commit.generateBranchName    | 生成分支名称           | 基于需求描述生成标准化分支名   |
| dish-ai-commit.reviewCode            | 代码审查               | AI 辅助的代码审查              |

## 生成提交信息

**命令 ID**: `dish-ai-commit.generateCommitMessage`

此命令是 Dish AI Commit Gen 的核心功能，用于生成符合 Conventional Commits 规范的提交消息。

### 使用方法

有多种方式触发此命令：

1. **通过源代码管理界面**：

   - 在 VS Code 的源代码管理视图中暂存更改后
   - 点击源代码管理标题栏中的 "Dish AI Commit" 图标

2. **通过命令面板**：

   - 按下 `Ctrl+Shift+P`（Windows/Linux）或 `Cmd+Shift+P`（macOS）打开命令面板
   - 输入 "Dish AI Commit: 生成提交信息" 并选择

3. **通过快捷键**（如果配置了）：
   - 您可以在 VS Code 的键盘快捷键设置中为此命令配置自定义快捷键

### 执行流程

1. 命令执行时，扩展会自动分析已暂存的文件变更
2. 使用配置的 AI 服务分析变更内容
3. 生成符合规范的提交消息
4. 自动填充到 SCM 输入框中

## 选择提交生成的 AI 模型

**命令 ID**: `dish-ai-commit.selectModel`

此命令用于动态切换用于生成提交消息的 AI 模型和提供商，无需修改配置文件。

### 使用方法

1. 通过命令面板执行：

   - 按下 `Ctrl+Shift+P`（Windows/Linux）或 `Cmd+Shift+P`（macOS）打开命令面板
   - 输入 "Dish AI Commit: 选择提交生成的 AI 模型" 并选择

2. 执行后会显示一个多步骤选择菜单：
   - 首先选择 AI 提供商（如 OpenAI、Ollama、智谱 AI 等）
   - 然后选择具体的模型（如 gpt-3.5-turbo、gpt-4 等）
   - 最后选择语言（可选）

### 选择持久化

模型选择会被临时保存，直到 VS Code 窗口关闭或选择新模型。如需永久更改默认模型，请修改配置文件中的相关设置。

## 生成周报

**命令 ID**: `dish-ai-commit.generateWeeklyReport`

此命令可以基于 Git 提交历史自动生成结构化的工作周报。

### 使用方法

1. 通过命令面板执行：

   - 按下 `Ctrl+Shift+P`（Windows/Linux）或 `Cmd+Shift+P`（macOS）打开命令面板
   - 输入 "Dish AI Commit: 生成周报" 并选择

2. 执行后会显示时间范围选择菜单：

   - 本周
   - 上周
   - 自定义日期范围

3. 选择时间范围后，系统会：
   - 获取指定时间范围内的提交记录
   - 使用 AI 分析提交内容并生成结构化周报
   - 在新编辑器窗口中显示生成的周报

### 输出格式

周报默认使用 Markdown 格式，包含以下主要部分：

- 工作总结
- 详细工作项（按项目或类别分组）
- 遇到的问题及解决方案（如有）
- 下周计划（可选）

## 生成分支名称

**命令 ID**: `dish-ai-commit.generateBranchName`

此命令可以根据功能或任务描述自动生成规范的 Git 分支名称。

### 使用方法

1. 通过命令面板执行：

   - 按下 `Ctrl+Shift+P`（Windows/Linux）或 `Cmd+Shift+P`（macOS）打开命令面板
   - 输入 "Dish AI Commit: 生成分支名称" 并选择

2. 执行后会弹出输入框：

   - 输入功能或任务的描述
   - 点击确认

3. AI 会根据描述生成规范的分支名称，并显示在输出面板中：
   - 包含适当的前缀（如 feature/、bugfix/）
   - 按配置的格式进行命名（kebab-case、camelCase 或 snake_case）
   - 提取关键信息，避免过长分支名

### 创建分支选项

生成分支名称后，系统会提示您是否立即创建该分支：

- 选择"是"将在当前仓库创建并切换到新分支
- 选择"否"则仅显示生成的分支名称，供您手动使用

## 代码审查

**命令 ID**: `dish-ai-commit.reviewCode`

此命令提供 AI 辅助的代码审查功能，帮助发现潜在问题并提供改进建议。

### 使用方法

1. 通过命令面板执行：

   - 按下 `Ctrl+Shift+P`（Windows/Linux）或 `Cmd+Shift+P`（macOS）打开命令面板
   - 输入 "Dish AI Commit: 代码审查" 并选择

2. 执行后会出现以下选项：

   - 审查当前文件
   - 审查已暂存文件
   - 审查选中代码

3. 选择目标后，系统会：
   - 使用 AI 分析代码
   - 检查可能的问题、风格不一致和改进机会
   - 在新编辑器窗口中显示审查结果

### 审查深度配置

您可以通过配置 `dish-ai-commit.features.codeReview.depth` 设置审查深度：

```json
{
  "dish-ai-commit.features.codeReview.depth": "detailed" // 可选: "basic", "standard", "detailed"
}
```

## 键盘快捷键

默认情况下，命令没有预设的键盘快捷键，但您可以自定义：

1. 打开 VS Code 的键盘快捷键设置（菜单：文件 > 首选项 > 键盘快捷方式）
2. 搜索 "Dish AI Commit"
3. 为所需命令设置快捷键

推荐的快捷键设置示例：

```json
{
  "key": "ctrl+alt+c",
  "command": "dish-ai-commit.generateCommitMessage",
  "when": "scmProvider == git || scmProvider == svn"
},
{
  "key": "ctrl+alt+w",
  "command": "dish-ai-commit.generateWeeklyReport"
},
{
  "key": "ctrl+alt+b",
  "command": "dish-ai-commit.generateBranchName"
}
```

## 命令上下文

某些命令在特定上下文下可用：

- `dish-ai-commit.generateCommitMessage` - 需要使用 Git 或 SVN 作为源代码管理工具
- `dish-ai-commit.generateWeeklyReport` - 需要在 Git 仓库中执行
- `dish-ai-commit.generateBranchName` - 需要在 Git 仓库中执行
- `dish-ai-commit.reviewCode` - 在任何时候都可用

## 集成到其他工作流

这些命令可以集成到您的自定义工作流中：

### 与 Git 钩子集成

您可以创建预提交钩子，在提交前自动生成提交消息：

```bash
#!/bin/sh
# .git/hooks/prepare-commit-msg

# 使用 VS Code 扩展 API 调用命令生成提交消息
code --extensionDevelopmentPath=/path/to/dish-ai-commit --execute-command dish-ai-commit.generateCommitMessage
```

### 与任务运行器集成

在 VS Code 的 tasks.json 中配置任务：

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "生成周报",
      "type": "shell",
      "command": "code --execute-command dish-ai-commit.generateWeeklyReport",
      "problemMatcher": []
    }
  ]
}
```
