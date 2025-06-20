// 主入口文件 - 导出所有公共 API

// 核心编辑器
export { default as Editor } from './Core/editor';
export { default as Engine } from './Core/engine';

// 插件系统
export {
    Plugin,
    ElementPlugin,
    BlockPlugin,
    MarkPlugin,
    InlinePlugin,
    ListPlugin,
    isBlockPlugin,
    isInlinePlugin,
    isMarkPlugin
} from './Core/plugin';

// 卡片系统
export { default as Card } from './Core/card/entry';
export * from './Core/card/enum';

// 视图和工具栏
export { default as View } from './Core/view';
export { default as Toolbar, Tooltip } from './Core/toolbar';

// 选区和范围
export { default as Selection } from './Core/selection';
export { isRangeInterface, isRange, isSelection } from './Core/range';

// 解析器
export { default as Parser } from './Core/parser';

// 工具组件
export { default as Scrollbar } from './Core/scrollbar';
export { default as Position } from './Core/position';
export { default as Resizer } from './Core/resizer';

// 节点工具
export { $, getHashId, uuid } from './Core/node';
export * from './Core/node/utils';

// 类型定义
export * from './types';
export * from './Core/utils';
export * from './Core/model';
export * from './Core/constants';

// 内置插件
export { default as Bold } from './Plugins/Bold';
export { default as Undo } from './Plugins/Undo';
export { default as Redo } from './Plugins/Redo';

// 第三方库
export { default as isHotkey } from 'is-hotkey';

// 默认导出编辑器类
import Editor from './Core/editor';
export default Editor;
