import Entry from './entry';
import Event from './event';
import { NodeInterface, NodeModelInterface, EditorInterface, SchemaInterface, RangeInterface } from '../../types';
import $ from './query';
import getHashId, { uuid } from './hash';
declare class NodeModel implements NodeModelInterface {
    private editor;
    constructor(editor: EditorInterface);
    isVoid(node: NodeInterface | Node | string, schema?: SchemaInterface): boolean;
    isMark(node: NodeInterface | Node, schema?: SchemaInterface): boolean;
    /**
     * 是否是inline标签
     * @param node 节点
     */
    isInline(node: NodeInterface | Node, schema?: SchemaInterface): boolean;
    /**
     * 是否是块级节点
     * @param node 节点
     */
    isBlock(node: NodeInterface | Node, schema?: SchemaInterface): boolean;
    /**
     * 判断block节点的子节点是否不包含blcok 节点
     */
    isNestedBlock(node: NodeInterface | Node): boolean;
    /**
     * 判断节点是否是顶级根节点，父级为编辑器根节点，且，子级节点没有block节点
     * @param node 节点
     * @returns
     */
    isRootBlock(node: NodeInterface, schema?: SchemaInterface): boolean;
    /**
     * 判断节点下的文本是否为空
     * @param withTrim 是否 trim
     */
    isEmpty(node: NodeInterface, withTrim?: boolean): boolean;
    /**
     * 判断一个节点下的文本是否为空，或者只有空白字符
     */
    isEmptyWithTrim(node: NodeInterface): boolean;
    /**
     * 判断节点包括子节点是否为空
     * @param node 节点
     * @returns
     */
    isEmptyWidthChild(node: NodeInterface): boolean;
    /**
     * 判断节点是否为列表节点
     * @param node 节点或者节点名称
     */
    isList(node: NodeInterface | string | Node): boolean;
    /**
     * 判断节点是否是自定义列表
     * @param node 节点
     */
    isCustomize(node: NodeInterface): boolean;
    /**
     * 去除包裹
     * @param node 需要去除包裹的节点
     */
    unwrap(node: NodeInterface): NodeInterface[];
    /**
     * 包裹节点
     * @param source 需要包裹的节点
     * @param outer 包裹的外部节点
     * @param mergeSame 合并相同名称的节点样式和属性在同一个节点上
     */
    wrap(source: NodeInterface | Node, outer: NodeInterface, mergeSame?: boolean): NodeInterface;
    /**
     * 合并节点
     * @param source 合并的节点
     * @param target 需要合并的节点
     * @param remove 合并后是否移除
     */
    merge(source: NodeInterface, target: NodeInterface, remove?: boolean): void;
    /**
     * 将源节点的子节点追加到目标节点，并替换源节点
     * @param source 旧节点
     * @param target 新节点
     */
    replace(source: NodeInterface, target: NodeInterface, copyId?: boolean): NodeInterface;
    /**
     * 光标位置插入文本
     * @param text 文本
     * @param range 光标
     */
    insertText(text: string, range?: RangeInterface): RangeInterface | undefined;
    /**
     * 在光标位置插入一个节点
     * @param node 节点
     * @param range 光标
     * @param removeCurrentEmptyBlock 当前光标行是空行时是否删除
     */
    insert(node: Node | NodeInterface, range?: RangeInterface, removeCurrentEmptyBlock?: boolean): RangeInterface | undefined;
    /**
     * 设置节点属性
     * @param node 节点
     * @param props 属性
     */
    setAttributes(node: NodeInterface, attrs: any): NodeInterface;
    /**
     * 移除值为负的样式
     * @param node 节点
     * @param style 样式名称
     */
    removeMinusStyle(node: NodeInterface, style: string): void;
    /**
     * 合并节点下的子节点，两个相同的相邻节点的子节点
     * @param node 当前节点
     */
    mergeChild(node: NodeInterface): void;
    /**
     * 删除节点两边标签
     * @param node 节点
     * @param tagName 标签名称，默认为br标签
     */
    removeSide(node: NodeInterface, tagName?: string): void;
    addBrForBlock: (blockNode: NodeInterface) => void;
    /**
     * 扁平化节点
     * @param node 节点
     * @param root 根节点
     */
    flat(node: NodeInterface, root?: NodeInterface): NodeInterface;
    /**
     * 标准化节点
     * @param node 节点
     */
    normalize(node: NodeInterface): NodeInterface;
    /**
     * 获取或设置元素节点html文本
     * @param {string|undefined} val html文本
     * @return {NodeEntry|string} 当前实例或html文本
     */
    html(node: NodeInterface): string;
    html(node: NodeInterface, val: string): NodeInterface;
    /**
     * 复制元素节点
     * @param {boolean} deep 是否深度复制
     * @return 复制后的元素节点
     */
    clone(node: NodeInterface, deep?: boolean, copyId?: boolean): NodeInterface;
    /**
     * 获取批量追加子节点后的outerHTML
     * @param nodes 节点集合
     * @param selector 追加的节点
     */
    getBatchAppendHTML(nodes: Array<NodeInterface>, selector: string): string;
    removeZeroWidthSpace(node: NodeInterface): void;
}
export default NodeModel;
export { Entry as NodeEntry, Event, $, getHashId, uuid };
