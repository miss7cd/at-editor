import { Path } from '../model';
import { NodeInterface, EventInterface, Selector, Context, EventListener } from '../../types';
/**
 * 扩展 Node 类
 * @class NodeEntry
 * @constructor
 * @param nodes 需要扩展的 NodeList
 * @param context 节点上下文，或根节点
 */
declare class NodeEntry implements NodeInterface {
    events: EventInterface[];
    document: Document | null;
    context: Context | undefined;
    name: string;
    type: number | undefined;
    window: Window | null;
    display: string | undefined;
    fragment?: DocumentFragment;
    [n: number]: Node;
    get length(): number;
    constructor(nodes: Node | NodeList | Array<Node>, context?: Context);
    /**
     * 遍历
     * @param {Function} callback 回调函数
     * @return 返回当前实例
     */
    each(callback: (node: Node, index: number) => boolean | void): NodeInterface;
    /**
     * 将 NodeEntry 转换为 Array
     * @return {Array} 返回数组
     */
    toArray(): Array<NodeInterface>;
    /**
     * 判断当前节点是否为 Node.ELEMENT_NODE 节点类型
     * @return {boolean}
     */
    isElement(): boolean;
    /**
     * 判断当前节点是否为 Node.TEXT_NODE 节点类型
     * @return {boolean}
     */
    isText(): boolean;
    /**
     * 判断当前节点是否为Card组件
     */
    isCard(): boolean;
    /**
     * 判断当前节点是否为block类型的Card组件
     */
    isBlockCard(): boolean;
    /**
     * 判断当前节点是否为inline类型的Card组件
     * @returns
     */
    isInlineCard(): boolean;
    /**
     * 是否是可编辑器卡片
     * @returns
     */
    isEditableCard(): boolean;
    /**
     * 判断当前节点是否为根节点
     */
    isRoot(root?: Node | NodeInterface): boolean;
    isEditable(): boolean;
    /**
     * 判断当前是否在根节点内
     */
    inEditor(root?: Node | NodeInterface): boolean;
    /**
     * 是否是光标标记节点
     * @returns
     */
    isCursor(): boolean;
    get<E extends Node>(index?: number): E | null;
    /**
     * 获取当前第 index 节点
     * @param {number} index
     * @return {NodeEntry|undefined} NodeEntry 类，或 undefined
     */
    eq(index: number): NodeInterface | undefined;
    /**
     * 获取当前节点所在父节点中的索引
     * @return {number} 返回索引
     */
    index(): number;
    /**
     * 获取当前节点父节点
     * @return 父节点
     */
    parent(): NodeInterface | undefined;
    /**
     * 查询当前节点的子节点
     * @param selector 查询器
     * @return 符合条件的子节点
     */
    children(selector?: string): NodeInterface;
    /**
     * 获取当前节点第一个子节点
     * @return NodeEntry 子节点
     */
    first(): NodeInterface | null;
    /**
     * 获取当前节点最后一个子节点
     * @return NodeEntry 子节点
     */
    last(): NodeInterface | null;
    /**
     * 返回元素节点之前的兄弟节点（包括文本节点、注释节点）
     * @return NodeEntry 节点
     */
    prev(): NodeInterface | null;
    /**
     * 返回元素节点之后的兄弟节点（包括文本节点、注释节点）
     * @return NodeEntry 节点
     */
    next(): NodeInterface | null;
    /**
     * 返回元素节点之前的兄弟元素节点（不包括文本节点、注释节点）
     * @return NodeEntry 节点
     */
    prevElement(): NodeInterface | null;
    /**
     * 返回元素节点之后的兄弟元素节点（不包括文本节点、注释节点）
     * @return NodeEntry 节点
     */
    nextElement(): NodeInterface | null;
    /**
     * 返回元素节点所在根节点路径，默认根节点为 document.body
     * @param context 根节点，默认为 document.body
     * @param filter 获取index的时候过滤
     * @param callback 获取index的时候回调
     * @return 路径
     */
    getPath(context?: Node | NodeInterface, filter?: (node: Node) => boolean, callback?: (index: number, path: number[], node: NodeInterface) => number[] | undefined): Array<number>;
    /**
     * 判断元素节点是否包含要查询的节点
     * @param {NodeInterface | Node} node 要查询的节点
     * @return {boolean} 是否包含
     */
    contains(node: NodeInterface | Node): boolean;
    /**
     * 根据查询器查询当前元素节点
     * @param {string} selector 查询器
     * @return 返回一个 NodeEntry 实例
     */
    find(selector: string): NodeInterface;
    /**
     * 根据查询器查询符合条件的离当前元素节点最近的父节点
     * @param selector 查询器
     * @param callback
     * @return 返回一个 NodeEntry 实例
     */
    closest(selector: string, callback?: (node: Node) => Node | undefined): NodeInterface;
    /**
     * 为当前元素节点绑定事件
     * @param {string} eventType 事件类型
     * @param {Function} listener 事件函数
     * @param options
     * @return 返回当前实例
     */
    on<R = any, F extends EventListener<R> = EventListener<R>>(eventType: string, listener: F, options?: boolean | AddEventListenerOptions): NodeInterface;
    /**
     * 移除当前元素节点事件
     * @param {string} eventType 事件类型
     * @param {Function} listener 事件函数
     * @param options
     * @return 返回当前实例
     */
    off(eventType: string, listener: EventListener, options?: boolean | EventListenerOptions): NodeInterface;
    /**
     * 获取当前元素节点相对于视口的位置
     * @param {Object} defaultValue 默认值
     * @return {Object}
     * {
     *  top,
     *  bottom,
     *  left,
     *  right
     * }
     */
    getBoundingClientRect(defaultValue?: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    }): {
        top: number;
        bottom: number;
        left: number;
        right: number;
    } | undefined;
    /**
     * 移除当前元素所有已绑定的事件
     * @return 当前 NodeEntry 实例
     */
    removeAllEvents(): NodeInterface;
    /**
     * 获取或设置元素节点属性
     * @return {NodeEntry|{[k:string]:string}} 返回值或当前实例
     */
    attributes(): {
        [k: string]: string;
    };
    attributes(key: {
        [k: string]: string;
    }): string;
    attributes(key: string, val: string | number): NodeEntry;
    attributes(key: string): string;
    /**
     * 移除元素节点属性
     * @param {string} key 属性名称
     * @return 返当前实例
     */
    removeAttributes(key: string): NodeInterface;
    /**
     * 判断元素节点是否包含某个 class
     * @param {string} className 样式名称
     * @return {boolean} 是否包含
     */
    hasClass(className: string): boolean;
    /**
     * 为元素节点增加一个 class
     * @param {string} className
     * @return 返当前实例
     */
    addClass(className: string): NodeInterface;
    /**
     * 移除元素节点 class
     * @param {string} className
     * @return 返当前实例
     */
    removeClass(className: string): NodeEntry;
    /**
     * 获取或设置元素节点样式
     * @return {NodeEntry|{[k:string]:string}} 返回值或当前实例
     */
    css(): {
        [k: string]: string;
    };
    css(key: {
        [k: string]: string | number;
    }): NodeEntry;
    css(key: string): string;
    css(key: string, val: string | number): NodeEntry;
    /**
     * 获取元素节点宽度
     * @return {number} 宽度
     */
    width(): number;
    /**
     * 获取元素节点高度
     * @return {number} 高度
     */
    height(): number;
    html(): string;
    html(html: string): NodeEntry;
    /**
     * 获取或设置元素节点文本
     */
    text(): string;
    text(text: string): NodeEntry;
    /**
     * 设置元素节点为显示状态
     * @param {string} display display值
     * @return 当前实例
     */
    show(display?: string): NodeInterface;
    /**
     * 设置元素节点为隐藏状态
     * @return 当前实例
     */
    hide(): NodeInterface;
    /**
     * 移除当前实例所有元素节点
     * @return 当前实例
     */
    remove(): NodeInterface;
    /**
     * 清空元素节点下的所有子节点
     * @return 当前实例
     */
    empty(): NodeInterface;
    /**
     * 比较两个元素节点是否相同
     * @param {NodeEntry|Node} node 比较的节点
     * @return {boolean} 是否相同
     */
    equal(node: NodeInterface | Node): boolean;
    clone(deep?: boolean): NodeInterface;
    /**
     * 在元素节点的开头插入指定内容
     * @param selector 选择器或元素节点
     * @return 当前实例
     */
    prepend(selector: Selector): NodeInterface;
    /**
     * 在元素节点的结尾插入指定内容
     * @param selector 选择器或元素节点
     * @return 当前实例
     */
    append(selector: Selector): NodeInterface;
    /**
     * 在元素节点前插入新的节点
     * @param selector 选择器或元素节点
     * @return 当前实例
     */
    before(selector: Selector): NodeInterface;
    /**
     * 在元素节点后插入内容
     * @param selector 选择器或元素节点
     * @return 当前实例
     */
    after(selector: Selector): NodeInterface;
    /**
     * 将元素节点替换为新的内容
     * @param selector 选择器或元素节点
     * @return 当前实例
     */
    replaceWith(selector: Selector): NodeInterface;
    getRoot(): NodeInterface;
    traverse(callback: (node: NodeInterface) => boolean | void | null | NodeInterface, order?: boolean, includeCard?: boolean | 'editable', onStart?: (node: NodeInterface) => void, onEnd?: (node: NodeInterface, next: NodeInterface | null) => void): void;
    getChildByPath(path: Path, filter?: (node: Node) => boolean): Node;
    getIndex(filter?: (node: Node) => boolean): number;
    findParent(container?: Node | NodeInterface): NodeInterface | null;
    allChildren(includeCard?: boolean | 'editable'): NodeInterface[];
    getViewport(): {
        top: number;
        left: number;
        bottom: number;
        right: number;
    };
    inViewport(view: NodeInterface, simpleMode?: boolean): boolean;
    scrollIntoView(view: NodeInterface, align?: 'start' | 'center' | 'end' | 'nearest'): void;
}
export default NodeEntry;
