import { EditorInterface, InlineModelInterface, NodeInterface, RangeInterface } from '../../types';
import type { SchemaInterface } from '../../types/schema';
declare class Inline implements InlineModelInterface {
    private editor;
    constructor(editor: EditorInterface);
    init(): void;
    /**
     * 修复光标选区位置，&#8203;<a>&#8203;<anchor />acde<focus />&#8203;</a>&#8203; -> <anchor />&#8203;<a>&#8203;acde&#8203;</a>&#8203;<focus />
     * 否则在ot中，可能无法正确的应用inline节点两边&#8203;的更改
     */
    repairRange(range?: RangeInterface): RangeInterface;
    /**
     * 获取最近的 Inline 节点，找不到返回 node
     */
    closest(source: NodeInterface): NodeInterface;
    /**
     * 获取向上第一个非 Inline 节点
     */
    closestNotInline(node: NodeInterface): NodeInterface;
    /**
     * 给当前光标节点添加inline包裹
     * @param inline inline标签
     * @param range 光标，默认获取当前光标
     */
    wrap(inline: NodeInterface | Node | string, range?: RangeInterface): void;
    /**
     * 移除inline包裹
     * @param range 光标，默认当前编辑器光标,或者需要移除的inline节点
     */
    unwrap(range?: RangeInterface | NodeInterface): void;
    /**
     * 插入inline标签
     * @param inline inline标签
     * @param range 光标
     */
    insert(inline: NodeInterface | Node | string, range?: RangeInterface): void;
    /**
     * 去除一个节点下的所有空 Inline callback 可以设置其它条件
     * @param root 节点
     * @param callback 回调
     */
    unwrapEmptyInlines(root: NodeInterface, callback?: (node: NodeInterface) => boolean): void;
    /**
     * 在光标重叠位置时分割
     * @param range 光标
     */
    splitOnCollapsed(range: RangeInterface, keelpNode?: NodeInterface | Node): Node | NodeInterface | undefined;
    /**
     * 在光标位置不重合时分割
     * @param range 光标
     * @param removeMark 要移除的空mark节点
     */
    splitOnExpanded(range: RangeInterface): void;
    /**
     * 分割inline标签
     */
    split(range?: RangeInterface): void;
    /**
     * 获取光标范围内的所有 inline 标签
     * @param range 光标
     */
    findInlines(range: RangeInterface): NodeInterface[];
    /**
     * 修复inline节点光标占位符
     * @param node inlne 节点
     */
    repairCursor(node: NodeInterface | Node): void;
    /**
     * 修复节点两侧零宽字符占位
     * @param node 节点
     */
    repairBoth(node: NodeInterface | Node): void;
    flat(node: NodeInterface | RangeInterface, schema?: SchemaInterface): NodeInterface | undefined;
}
export default Inline;
