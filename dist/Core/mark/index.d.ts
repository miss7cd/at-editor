import { EditorInterface, NodeInterface, RangeInterface } from '../../types';
import { MarkInterface, MarkModelInterface } from '../../types/mark';
declare class Mark implements MarkModelInterface {
    private editor;
    constructor(editor: EditorInterface);
    init(): void;
    /**
     * 解析markdown
     * @param event 事件
     */
    triggerMarkdown(event: KeyboardEvent): true | undefined;
    pluginCaches: Map<string, MarkInterface>;
    /**
     * 根据节点查找mark插件实例
     * @param node 节点
     */
    findPlugin(mark: NodeInterface): MarkInterface | undefined;
    /**
     * 获取最近的 Mark 节点，找不到返回 node
     */
    closest(source: NodeInterface): NodeInterface;
    /**
     * 获取向上第一个非 Mark 节点
     */
    closestNotMark(node: NodeInterface): NodeInterface;
    /**
     * 比较两个节点是否相同，包括attributes、style、class
     * @param source 源节点
     * @param target 目标节点
     * @param isCompareValue 是否比较每项属性的值
     */
    compare(source: NodeInterface, target: NodeInterface, isCompareValue?: boolean): boolean;
    /**
     * 判断源节点是否包含目标节点的所有属性名称和样式名称
     * @param source 源节点
     * @param target 目标节点
     */
    contain(source: NodeInterface, target: NodeInterface): boolean;
    /**
     * 去除一个节点下的所有空 Mark，通过 callback 可以设置其它条件
     * @param root 节点
     * @param callback 回调
     */
    unwrapEmptyMarks(root: NodeInterface, callback?: (node: NodeInterface) => boolean): void;
    /**
     * 在光标重叠位置时分割，在分割时会清空父节点内容再重组，如果需要保持光标右边某节点的追踪，请传入该节点
     * @param range 光标
     * @param removeMark 要移除的mark空节点
     * @param keelpNode 分割光标右侧需要保持追踪的节点
     */
    splitOnCollapsed(range: RangeInterface, removeMark?: NodeInterface | Array<NodeInterface>, keelpNode?: NodeInterface | Node): Node | NodeInterface | undefined;
    /**
     * 在光标位置不重合时分割
     * @param range 光标
     * @param removeMark 要移除的空mark节点
     */
    splitOnExpanded(range: RangeInterface, removeMark?: NodeInterface | Array<NodeInterface>): void;
    /**
     * 分割mark标签
     * @param removeMark 需要移除的mark标签
     */
    split(range?: RangeInterface, removeMark?: NodeInterface | Node | string | Array<NodeInterface>): void;
    /**
     *
     * @param node 包裹一个节点
     * @param mark 包裹的样式
     * @param plugin 包裹的样式节点所属mark插件，如果循环传入可提高效率，否则每次都需要查找。需要使用插件的级别和是否合并等属性
     * @returns 未处理返回 void，因为某些原因不能包裹返回 false，包裹成功返回 NodeInterface
     */
    wrapByNode(node: NodeInterface, mark: NodeInterface, plugin?: MarkInterface | undefined, root?: NodeInterface): false | void | NodeInterface;
    /**
     * 在当前光标选区包裹mark标签
     * @param mark mark标签
     * @param both mark标签两侧节点
     */
    wrap(mark: NodeInterface | Node | string, range?: RangeInterface): void;
    findSameParent: (parentMark: NodeInterface, sourceMark: NodeInterface) => boolean;
    mergeMarks(marks: Array<NodeInterface>): void;
    /**
     * 合并当前选区的mark节点
     * @param range 光标，默认当前选区光标
     */
    merge(range?: RangeInterface): void;
    /**
     * 移除多个节点的mark
     * @param nodes 要移除的节点集合
     * @param removeMark 要移除的mark样式
     */
    unwrapByNodes(nodes: NodeInterface[], removeMark?: NodeInterface | Array<NodeInterface>): void;
    /**
     * 去掉mark包裹
     * @param range 光标
     * @param removeMark 要移除的mark标签
     */
    unwrap(removeMark?: NodeInterface | Node | string | Array<NodeInterface>, range?: RangeInterface): void;
    /**
     * 光标处插入mark标签
     * @param mark mark标签
     * @param range 指定光标，默认为编辑器选中的光标
     */
    insert(mark: NodeInterface | Node | string, range?: RangeInterface): void;
    /**
     * 查找对范围有效果的所有 Mark
     * @param range 范围
     */
    findMarks(range: RangeInterface): NodeInterface[];
    /**
     * 从下开始往上遍历删除空 Mark，当遇到空 Block，添加 BR 标签
     * @param node 节点
     * @param addBr 是否添加br
     */
    removeEmptyMarks(node: NodeInterface, addBr?: boolean): void;
    repairCursor(mark: NodeInterface | Node): void;
}
export default Mark;
