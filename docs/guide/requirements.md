# 依赖要求

## 系统要求

使用 Dish AI Commit Gen 扩展需要满足以下系统要求：

### VS Code 版本

- **最低要求**：VS Code 1.74.0 或更高版本
- **推荐版本**：最新的 VS Code 稳定版

### 操作系统

Dish AI Commit Gen 支持所有 VS Code 支持的操作系统：

- **Windows**：Windows 10 或更高版本
- **macOS**：macOS 10.15 (Catalina) 或更高版本
- **Linux**：Ubuntu 18.04+, Debian 10+, CentOS 8+, Fedora 32+ 等主流发行版

## 版本控制系统

### Git

- **最低版本**：Git 2.25.0 或更高版本
- **推荐版本**：Git 2.30.0 或更高版本

Git 必须正确安装并可在系统 PATH 中访问。您可以通过在终端中运行以下命令来检查 Git 版本：

```bash
git --version
```

### SVN (可选)

如果您需要使用 SVN 功能：

- **最低版本**：SVN 1.14.0 或更高版本
- **推荐版本**：最新的稳定版 SVN

SVN 必须正确安装并可在系统 PATH 中访问。您可以通过在终端中运行以下命令来检查 SVN 版本：

```bash
svn --version
```

## 网络要求

### 使用云 AI 服务

如果您选择使用 OpenAI、智谱 AI、DashScope、Gemini 等云 AI 服务，您需要：

- **稳定的互联网连接**：确保能稳定访问相应的 AI 服务 API
- **相应 API 的网络可达性**：确保您的网络环境可以访问所选 AI 服务的 API 端点

### 使用本地 AI 模型 (Ollama)

如果您选择使用 Ollama 本地模型：

- **硬件要求**：

  - **CPU**：至少 4 核心
  - **内存**：至少 8GB RAM，推荐 16GB 或更高
  - **存储**：根据所选模型，至少 5-10GB 可用空间
  - **GPU**：推荐但不必须，有 CUDA 支持的 NVIDIA GPU 可显著提升性能

- **软件要求**：
  - 已正确安装 [Ollama](https://ollama.ai/)
  - 已下载所需的语言模型

## AI 服务账户要求

根据您选择的 AI 提供商，您可能需要：

### OpenAI

- 有效的 OpenAI API 密钥
- API 使用配额和余额

### 智谱 AI

- 智谱 AI 开放平台账号
- 有效的 API 密钥

### Gemini AI

- Google AI Studio 账号
- 有效的 Gemini API 密钥

### 其他提供商

请参阅 [AI 提供商配置](../config/ai-providers) 页面获取详细信息。

## 其他依赖

- **Node.js**：VS Code 扩展运行时环境已包含，无需单独安装
- **网络代理**：如果您在使用网络代理，可能需要在 VS Code 的设置中配置代理

## 兼容性注意事项

### 其他扩展

Dish AI Commit Gen 与大多数 VS Code 扩展兼容，但可能与以下类型的扩展有交互：

- 其他 Git/SVN 集成扩展
- 其他提交消息辅助扩展
- AI 代码辅助扩展

如果发现兼容性问题，请参阅 [常见问题](./faq) 或在 [GitHub Issues](https://github.com/littleCareless/dish-ai-commit/issues) 中报告。

### 企业网络环境

在企业网络环境中，您可能需要：

- 确保 AI 服务 API 域名在允许列表中
- 配置适当的网络代理
- 考虑使用本地 AI 模型解决方案
