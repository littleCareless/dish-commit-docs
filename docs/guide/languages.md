# 多语言支持

Dish AI Commit Gen 提供全面的多语言支持，让全球各地的开发者能够使用自己熟悉的语言生成提交消息。

## 支持的语言

目前，Dish AI Commit Gen 支持以下 19 种语言的提交消息生成：

| 语言         | 配置值             | 示例提交消息                                                 |
| ------------ | ------------------ | ------------------------------------------------------------ |
| 简体中文     | `简体中文`         | `feat: 添加用户登录功能`                                     |
| 繁体中文     | `繁體中文`         | `feat: 添加用戶登錄功能`                                     |
| 英语         | `英语`             | `feat: add user login functionality`                         |
| 日语         | `日本語`           | `feat: ユーザーログイン機能を追加`                           |
| 韩语         | `한국어`           | `feat: 사용자 로그인 기능 추가`                              |
| 德语         | `Deutsch`          | `feat: Benutzeranmeldefunktion hinzufügen`                   |
| 法语         | `Français`         | `feat: ajouter la fonctionnalité de connexion utilisateur`   |
| 西班牙语     | `Español`          | `feat: agregar funcionalidad de inicio de sesión de usuario` |
| 意大利语     | `Italiano`         | `feat: aggiungere la funzionalità di accesso utente`         |
| 荷兰语       | `Nederlands`       | `feat: gebruikersaanmeldingsfunctionaliteit toevoegen`       |
| 葡萄牙语     | `Português`        | `feat: adicionar funcionalidade de login do usuário`         |
| 俄语         | `Русский`          | `feat: добавить функцию входа пользователя`                  |
| 瑞典语       | `Svenska`          | `feat: lägg till användarinloggningsfunktion`                |
| 捷克语       | `Čeština`          | `feat: přidat funkci přihlášení uživatele`                   |
| 波兰语       | `Polski`           | `feat: dodać funkcję logowania użytkownika`                  |
| 土耳其语     | `Türkçe`           | `feat: kullanıcı giriş işlevini ekle`                        |
| 越南语       | `Tiếng Việt`       | `feat: thêm chức năng đăng nhập người dùng`                  |
| 印度尼西亚语 | `Bahasa Indonesia` | `feat: menambahkan fungsi login pengguna`                    |
| 泰语         | `ไทย`              | `feat: เพิ่มฟังก์ชันการเข้าสู่ระบบของผู้ใช้`                 |

## 设置语言

您可以通过以下方式设置提交消息语言：

### 通过配置文件

在 VS Code 的设置中，您可以配置 `dish-ai-commit.base.language` 选项来设置默认语言：

```json
{
  "dish-ai-commit.base.language": "简体中文"
}
```

### 通过命令面板

1. 按下 `Ctrl+Shift+P`（Windows/Linux）或 `Cmd+Shift+P`（macOS）打开命令面板
2. 输入 "Dish AI Commit: 选择提交生成的 AI 模型"
3. 在模型选择后，您将能够选择语言偏好

## 多语言团队协作

对于多语言开发团队，有以下几种工作方式：

### 统一标准语言

为了保持仓库提交消息的一致性，团队可以选择统一使用一种语言（如英语）作为标准。在这种情况下，可以在项目的 `.vscode/settings.json` 中设置：

```json
{
  "dish-ai-commit.base.language": "英语"
}
```

这将确保所有团队成员生成相同语言的提交消息。

### 个人语言偏好

团队也可以允许每个开发者使用自己偏好的语言。在这种情况下，每个开发者可以在自己的用户设置中配置语言偏好。

### 双语提交消息

对于需要同时支持多种语言的团队，您可以自定义系统提示词来生成双语提交消息：

```json
{
  "dish-ai-commit.base.systemPrompt": "请同时生成中英文双语提交消息，格式为：[英文描述] / [中文描述]"
}
```

示例输出：

```
feat: add user login functionality / 添加用户登录功能
```

## 语言与 AI 模型的关系

不同的 AI 模型对不同语言的支持程度可能有所差异：

- **OpenAI (GPT-4/GPT-3.5)**: 对大多数主流语言支持良好
- **智谱 AI (GLM-4)**: 对中文支持优秀
- **Gemini AI**: 多语言支持不错
- **本地模型 (Ollama)**: 取决于使用的具体模型，通常英文支持最好

选择适合您语言需求的 AI 模型可以提高提交消息的质量。

## 本地化和国际化考虑

### 时区感知

Dish AI Commit Gen 会考虑您的系统时区，确保在生成包含时间信息的提交消息时（例如回滚提交）使用正确的时区信息。

### 字符编码

所有生成的提交消息都使用 UTF-8 编码，确保正确显示所有语言的特殊字符。
