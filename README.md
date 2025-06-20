# AtEditor

一个现代化的、可扩展的富文本编辑器框架，具有插件架构和卡片系统。

[![npm version](https://badge.fury.io/js/at-editor.svg)](https://badge.fury.io/js/at-editor)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## ✨ 特性

- 🚀 **现代化架构** - 基于 TypeScript 构建，采用模块化设计
- 🔌 **插件系统** - 强大的插件架构，易于扩展功能
- 🃏 **卡片系统** - 支持复杂的富内容组件（视频、文件等）
- 📝 **Markdown 支持** - 内置 Markdown 解析和渲染
- 🎨 **可定制样式** - 灵活的 CSS 样式系统
- ⌨️ **快捷键支持** - 丰富的键盘快捷键
- 🌍 **国际化** - 内置多语言支持
- 📱 **响应式设计** - 适配各种屏幕尺寸

## 📦 安装

```bash
npm install at-editor
```

或者使用 yarn：

```bash
yarn add at-editor
```

## 🚀 快速开始

### 基础使用

```html
<!DOCTYPE html>
<html>
<head>
    <title>AtEditor Demo</title>
</head>
<body>
    <div id="editor"></div>
    
    <script type="module">
        import { Editor } from 'at-editor';
        
        const editor = new Editor('#editor', {
            lang: 'zh-CN',
            plugins: ['bold', 'italic', 'undo', 'redo'],
            cards: ['image', 'video'],
            config: {
                placeholder: '开始编写您的内容...'
            }
        });
        
        editor.init();
    </script>
</body>
</html>
```

### React 集成

```jsx
import React, { useEffect, useRef } from 'react';
import { Editor } from 'at-editor';

const RichTextEditor = () => {
    const editorRef = useRef(null);
    const editorInstance = useRef(null);

    useEffect(() => {
        if (editorRef.current && !editorInstance.current) {
            editorInstance.current = new Editor(editorRef.current, {
                lang: 'zh-CN',
                plugins: ['bold', 'italic', 'undo', 'redo'],
                cards: ['image', 'video']
            });
            editorInstance.current.init();
        }

        return () => {
            if (editorInstance.current) {
                editorInstance.current.destroy();
            }
        };
    }, []);

    return <div ref={editorRef} />;
};

export default RichTextEditor;
```

## 🔧 配置选项

```typescript
interface EditorOptions {
    // 语言设置
    lang?: 'zh-CN' | 'en-US';
    locale?: Record<string, any>;
    
    // 插件和卡片
    plugins?: PluginEntry[];
    cards?: CardEntry[];
    
    // 编辑器配置
    config?: Record<string, any>;
    
    // 图标字体
    iconFonts?: string | false;
    
    // 根节点
    root?: HTMLElement;
    
    // 滚动节点
    scrollNode?: HTMLElement | (() => HTMLElement);
    
    // 懒渲染
    lazyRender?: boolean;
}
```

## 🔌 插件开发

### 创建自定义插件

```typescript
import { PluginInterface } from 'at-editor';

class CustomPlugin implements PluginInterface {
    name = 'custom-plugin';
    
    init(editor: EditorInterface) {
        // 插件初始化逻辑
        editor.on('keydown', this.handleKeydown);
    }
    
    destroy() {
        // 清理逻辑
    }
    
    private handleKeydown = (event: KeyboardEvent) => {
        // 处理键盘事件
    };
}

// 使用插件
const editor = new Editor('#editor', {
    plugins: [CustomPlugin]
});
```

### 创建自定义卡片

```typescript
import { CardInterface } from 'at-editor';

class ImageCard implements CardInterface {
    name = 'image';
    
    render() {
        return `
            <div class="image-card">
                <img src="" alt="" />
                <div class="image-toolbar">
                    <button class="resize">调整大小</button>
                    <button class="delete">删除</button>
                </div>
            </div>
        `;
    }
    
    init(card: HTMLElement) {
        // 卡片初始化逻辑
    }
    
    destroy(card: HTMLElement) {
        // 清理逻辑
    }
}
```

## 📚 API 文档

### Editor 类

#### 构造函数
```typescript
new Editor(selector: string | HTMLElement, options?: EditorOptions)
```

#### 主要方法

- `init()` - 初始化编辑器
- `destroy()` - 销毁编辑器
- `on(event, listener)` - 绑定事件
- `off(event, listener)` - 解绑事件
- `trigger(event, ...args)` - 触发事件
- `getValue()` - 获取编辑器内容
- `setValue(value)` - 设置编辑器内容

### 事件系统

编辑器支持丰富的事件：

- `keydown` - 键盘按下
- `keyup` - 键盘释放
- `change` - 内容变化
- `selectionchange` - 选区变化
- `focus` - 获得焦点
- `blur` - 失去焦点

## 🧪 测试

```bash
# 运行测试
npm test

# 监听模式
npm run test:watch
```

## 🔧 开发

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 代码检查
npm run lint

# 格式化代码
npm run format
```

## 🤝 贡献

我们欢迎所有形式的贡献！

### 贡献指南

1. Fork 这个仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

### 开发环境设置

1. 克隆仓库
```bash
git clone https://github.com/your-username/at-editor.git
cd at-editor
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

## 📄 许可证

本项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者！

## 📞 联系我们

- 问题反馈：[GitHub Issues](https://github.com/your-username/at-editor/issues)
- 邮箱：your-email@example.com
- 官网：[https://your-website.com](https://your-website.com)

---

如果这个项目对你有帮助，请给我们一个 ⭐️！ 
