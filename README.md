# AI助手项目

这是一个使用 Next.js 和 Tailwind CSS 构建的 AI 助手网站项目，包含 AI 聊天功能。

## 项目结构

- `app/`: Next.js 13+ 应用目录
  - `page.tsx`: 首页
  - `layout.tsx`: 全局布局
  - `globals.css`: 全局样式
  - `ai-chat/`: AI 聊天页面
  - `api/`: API 路由
- `components/`: 可复用的 React 组件
  - `ui/`: UI 组件
    - `letter-pullup.tsx`: 文字上拉动画组件
    - `neon-gradient-card.tsx`: 霓虹渐变卡片组件
    - `retro-grid.tsx`: 复古网格背景组件
  - `ChatInterface.tsx`: AI 聊天界面组件
- `tailwind.config.js`: Tailwind CSS 配置
- `postcss.config.js`: PostCSS 配置
- `.env.local`: 环境变量（包含 API 密钥）

## 主要功能

1. 首页：简介和引导
2. AI 聊天：与 AI 助手进行实时对话（使用 DeepSeek API）

## 使用的技术

- Next.js 13+
- React
- TypeScript
- Tailwind CSS
- DeepSeek AI API

## 如何运行

1. 克隆仓库
2. 运行 `npm install` 安装依赖
3. 运行 `npm run dev` 启动开发服务器
4. 在浏览器中访问 `http://localhost:3000`

## 待办事项

- [x] 优化首页设计
- [x] 添加 AI 聊天功能
- [x] 集成 DeepSeek AI API
- [ ] 优化页面加载性能
- [ ] 添加用户认证功能

## 国际化 (i18n)

本项目使用 `next-intl` 进行国际化处理。

### 目录结构

- `/messages`: 包含不同语言的翻译文件
  - `en.json`: 英文翻译
  - `zh.json`: 中文翻译
- `/middleware.ts`: 配置 `next-intl` 中间件
- `/app/layout.tsx`: 根布局文件，处理消息加载

### 添加新语言

1. 在 `/messages` 目录下创建新的语言文件，例如 `ja.json` 用于日语
2. 在 `middleware.ts` 中的 `locales` 数组中添加新的语言代码
3. 更新所有页面组件，确保它们使用 `useTranslations` 钩子来获取翻译

### 使用翻译

在组件中使用翻译：
