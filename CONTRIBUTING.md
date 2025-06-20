# 贡献指南

感谢您对 AtEditor 项目的关注！我们欢迎所有形式的贡献。

## 🚀 快速开始

### 环境要求

- Node.js >= 14.0.0
- npm >= 6.0.0 或 yarn >= 1.22.0

### 开发环境设置

1. **Fork 并克隆仓库**

```bash
git clone https://github.com/your-username/at-editor.git
cd at-editor
```

2. **安装依赖**

```bash
npm install
# 或者
yarn install
```

3. **启动开发服务器**

```bash
npm run dev
# 或者
yarn dev
```

## 📝 开发流程

### 1. 创建分支

```bash
git checkout -b feature/your-feature-name
# 或者
git checkout -b fix/your-bug-fix
```

### 2. 开发

- 编写代码
- 添加测试
- 确保代码通过 lint 检查

### 3. 测试

```bash
# 运行所有测试
npm test

# 运行测试并监听变化
npm run test:watch

# 检查代码覆盖率
npm run test:coverage
```

### 4. 代码检查

```bash
# 运行 ESLint
npm run lint

# 自动修复 ESLint 问题
npm run lint:fix

# 格式化代码
npm run format
```

### 5. 提交代码

```bash
git add .
git commit -m "feat: add new feature"
git push origin feature/your-feature-name
```

### 6. 创建 Pull Request

在 GitHub 上创建 Pull Request，并填写 PR 模板。

## 📋 提交规范

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

- `feat:` - 新功能
- `fix:` - 修复 bug
- `docs:` - 文档更新
- `style:` - 代码格式调整
- `refactor:` - 代码重构
- `test:` - 测试相关
- `chore:` - 构建过程或辅助工具的变动

示例：
```bash
git commit -m "feat: add image upload plugin"
git commit -m "fix: resolve cursor position issue"
git commit -m "docs: update API documentation"
```

## 🧪 测试指南

### 编写测试

- 测试文件应该放在 `src/__tests__/` 目录下
- 测试文件命名：`*.test.ts` 或 `*.spec.ts`
- 使用 Jest 作为测试框架

示例测试：

```typescript
import { Editor } from '../index';

describe('Editor', () => {
  let editor: Editor;
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    editor = new Editor(container);
  });

  afterEach(() => {
    editor.destroy();
    document.body.removeChild(container);
  });

  test('should initialize correctly', () => {
    expect(editor).toBeDefined();
    expect(editor.container).toBe(container);
  });
});
```

### 测试覆盖率

我们要求测试覆盖率至少达到 80%：

```bash
npm run test:coverage
```

## 🔧 代码规范

### TypeScript

- 使用 TypeScript 编写所有代码
- 避免使用 `any` 类型
- 为所有公共 API 提供类型定义
- 使用接口定义对象结构

### 代码风格

- 使用 ESLint 和 Prettier 保持代码风格一致
- 遵循项目中的命名约定
- 添加适当的注释和文档

### 文件组织

```
src/
├── Core/           # 核心功能
├── Plugins/        # 插件
├── __tests__/      # 测试文件
└── index.ts        # 主入口文件
```

## 🐛 Bug 报告

### 报告 Bug

1. 使用 GitHub Issues 报告 bug
2. 提供详细的复现步骤
3. 包含浏览器版本、操作系统等信息
4. 如果可能，提供最小复现示例

### Bug 报告模板

```markdown
## Bug 描述
简要描述 bug

## 复现步骤
1. 打开页面
2. 点击某个按钮
3. 观察错误

## 预期行为
描述期望的行为

## 实际行为
描述实际发生的行为

## 环境信息
- 浏览器：Chrome 90.0.4430.212
- 操作系统：Windows 10
- AtEditor 版本：0.1.0

## 其他信息
任何其他相关信息
```

## 💡 功能请求

### 提出功能请求

1. 使用 GitHub Issues 提出功能请求
2. 详细描述功能需求
3. 说明使用场景
4. 如果可能，提供设计建议

### 功能请求模板

```markdown
## 功能描述
简要描述新功能

## 使用场景
描述在什么情况下需要这个功能

## 实现建议
如果有的话，提供实现建议

## 其他信息
任何其他相关信息
```

## 📚 文档贡献

### 更新文档

- 保持 README.md 和 API 文档的更新
- 为新功能添加使用示例
- 修复文档中的错误

### 文档规范

- 使用清晰的标题结构
- 提供代码示例
- 使用中文编写文档
- 保持文档风格一致

## 🏷️ 发布流程

### 版本管理

我们使用 [Semantic Versioning](https://semver.org/)：

- `MAJOR.MINOR.PATCH`
- `MAJOR` - 不兼容的 API 修改
- `MINOR` - 向下兼容的功能性新增
- `PATCH` - 向下兼容的问题修正

### 发布步骤

1. 更新版本号
2. 更新 CHANGELOG.md
3. 创建发布标签
4. 发布到 npm

## 🤝 社区

### 获取帮助

- GitHub Issues：报告 bug 和功能请求
- GitHub Discussions：讨论和问答
- 邮件：your-email@example.com

### 行为准则

- 尊重所有贡献者
- 保持友好和专业的交流
- 欢迎新手提问
- 提供建设性的反馈

## 🙏 致谢

感谢所有为 AtEditor 项目做出贡献的开发者！

---

如果您有任何问题或建议，请随时联系我们！ 