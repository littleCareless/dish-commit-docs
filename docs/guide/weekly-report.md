# 周报生成

Dish AI Commit Gen 的智能周报生成功能可以帮助开发者自动总结工作进展，提高工作汇报效率。

## 功能介绍

周报生成功能基于您的 Git 提交历史，使用 AI 技术自动生成结构化的周报内容。系统会智能分析提交消息，理解工作内容，并将其组织成专业的周报格式。该功能支持多种 AI 提供商，包括 OpenAI、Ollama、VSCode 内置 AI、智谱 AI、Gemini AI 等，能够根据您的配置自动选择最佳 AI 服务生成高质量报告。

周报生成支持自定义模板，可以通过配置不同的 systemPrompt 来定制周报的风格、格式和内容重点，以适应不同团队和组织的汇报需求。无论是项目开发进度、问题解决情况，还是下周计划，都可以通过 AI 自动从提交记录中提取和总结。

## 基本使用

### 生成周报

1. 按下 `Ctrl+Shift+P`（Windows/Linux）或 `Cmd+Shift+P`（macOS）打开命令面板
2. 输入 "Dish AI Commit: 生成周报" 并选择
3. 在弹出的选择框中，选择时间范围，例如：
   - 本周
   - 上周
   - 自定义日期范围
4. 等待几秒钟，AI 将自动分析这段时间内的提交历史并生成周报

### 自定义日期范围

如果您选择了自定义日期范围，将会弹出日期选择器，让您可以精确指定要包含的时间段。

## 周报模板自定义

您可以通过配置 `dish-ai-commit.features.weeklyReport.systemPrompt` 选项来自定义周报的生成模板：

```json
{
  "dish-ai-commit.features.weeklyReport.systemPrompt": "请根据以下提交记录，生成一份包含以下部分的周报：1. 本周完成工作总结，2. 遇到的问题及解决方案，3. 下周计划。按项目分类汇总工作内容，使用简洁专业的语言。"
}
```

### 模板示例

#### 标准周报模板

```json
{
  "dish-ai-commit.features.weeklyReport.systemPrompt": "根据提交记录，生成一份包含'本周工作摘要'、'详细工作项'和'下周计划'三个部分的周报。"
}
```

#### 项目管理模板

```json
{
  "dish-ai-commit.features.weeklyReport.systemPrompt": "生成一份结构化周报，包括：1. 完成的工作（按项目分类），2. 进行中的工作，3. 阻塞项，4. 下周计划。重点突出关键成就和风险项。"
}
```

#### 技术导向模板

```json
{
  "dish-ai-commit.features.weeklyReport.systemPrompt": "生成技术周报，包括：1. 功能开发进展，2. 重构和优化工作，3. 解决的技术债和 bug，4. 技术探索，5. 下周技术重点。增加对每项工作技术难点的简要说明。"
}
```

## 周报输出格式

生成的周报默认使用 Markdown 格式，可以轻松复制到各种文档工具中。周报通常包含以下结构：

```markdown
# 周报 (2025 年 4 月 10 日 - 2025 年 4 月 16 日)

## 本周工作总结

### 项目名称 A

- 完成了用户登录模块的开发
- 修复了数据展示页面的排序问题
- 优化了图表组件的加载性能

### 项目名称 B

- 实现了文件上传功能
- 集成了第三方支付接口
- 完善了错误处理机制

## 遇到的问题及解决方案

1. **问题**: 用户数据同步出现延迟
   **解决方案**: 优化了数据库查询，增加了缓存机制

2. **问题**: 移动端页面布局异常
   **解决方案**: 重构了响应式设计，使用 flex 布局代替传统布局

## 下周计划

- 完成用户管理模块的测试工作
- 开始开发数据分析功能
- 优化应用整体性能
```

## 高级用法

### 多仓库支持

如果您在处理多个代码仓库的项目，可以通过以下步骤生成包含所有仓库工作内容的综合周报：

1. 在每个仓库中分别生成周报
2. 将生成的内容复制到一个文档中
3. 使用命令面板中的 "Dish AI Commit: 生成周报" 命令，选择 "合并周报" 选项
4. 粘贴所有周报内容，AI 将自动合并和整理内容

### 团队周报

对于团队负责人，可以收集团队成员的提交记录，生成团队整体周报：

1. 在 Git 命令行中使用 `git log --author="user1\|user2\|user3"` 获取多人的提交记录
2. 将输出结果保存为文本文件
3. 使用自定义系统提示，指定生成团队周报的格式

```json
{
  "dish-ai-commit.features.weeklyReport.systemPrompt": "分析团队成员的提交记录，生成一份团队周报，按照成员分组汇总工作内容，并提供团队整体进展摘要。"
}
```

## 提示和技巧

1. **提交消息质量**: 高质量的提交消息会产生更好的周报内容，建议团队统一使用 Dish AI Commit 生成标准化提交消息

2. **周报语言**: 周报生成遵循您在 `dish-ai-commit.base.language` 中设置的语言偏好

3. **导出和共享**: 生成的周报可以导出为 Markdown、HTML 或文本格式，方便共享和存档

4. **定期生成**: 建立固定的周报生成习惯，例如每周五下午生成上周周报，提高工作总结的效率
