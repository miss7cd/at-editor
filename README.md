# Chrome Extension with Vue and TypeScript

这是一个使用Vue 3和TypeScript开发的Chrome扩展程序模板。

## 功能特性

- 使用Vue 3和TypeScript
- 包含popup页面、background script和content script
- 现代化的构建系统（Webpack）
- 完整的类型支持
- 美观的UI设计

## 开发准备

1. 安装依赖：
```bash
npm install
```

2. 开发模式：
```bash
npm run dev
```

3. 生产构建：
```bash
npm run build
```

## 在Chrome中加载扩展

1. 打开Chrome浏览器
2. 访问 `chrome://extensions/`
3. 开启右上角的「开发者模式」
4. 点击「加载已解压的扩展程序」
5. 选择项目的 `dist` 目录

## 项目结构

```
├── src/
│   ├── popup/           # 弹出窗口相关文件
│   │   ├── index.html
│   │   ├── index.ts
│   │   ├── App.vue
│   │   └── style.css
│   ├── background.ts    # 后台脚本
│   └── content.ts       # 内容脚本
├── public/
│   └── icons/          # 扩展图标
├── manifest.json        # 扩展配置文件
├── webpack.config.js    # Webpack配置
├── tsconfig.json       # TypeScript配置
└── package.json        # 项目依赖和脚本
```

## 开发指南

- `src/popup/`: 包含弹出窗口的Vue组件和样式
- `src/background.ts`: 处理后台任务和浏览器事件
- `src/content.ts`: 注入到网页中的脚本
- `public/`: 静态资源文件

## 注意事项

1. 修改代码后需要在Chrome扩展页面点击刷新按钮
2. 开发模式下支持热重载
3. 确保manifest.json中的权限配置符合需求

## 许可证

MIT