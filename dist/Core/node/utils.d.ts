import { ElementInterface, NodeInterface, Selector } from '../../types';
export declare const isNodeEntry: (selector: Selector) => selector is NodeInterface;
export declare const isNodeList: (selector: Selector) => selector is NodeList;
export declare const isNode: (selector: Selector) => selector is Node;
/**
 * 如果元素被指定的选择器字符串选择，Element.matches()  方法返回true; 否则返回false。
 * @param element 节点
 * @param selector 选择器
 */
export declare const isMatchesSelector: (element: ElementInterface, selector: string) => boolean;
export declare const isCard: (element: Element) => boolean;
/**
 * 判断当前节点是否为block类型的Card组件
 */
export declare const isBlockCard: (element: Element) => boolean;
/**
 * 判断当前节点是否为inline类型的Card组件
 * @returns
 */
export declare const isInlineCard: (element: Element) => boolean;
/**
 * 是否是可编辑器卡片
 * @returns
 */
export declare const isEditableCard: (element: Element) => boolean;
/**
 * 判断当前节点是否为根节点
 */
export declare const isRoot: (element: Element, root?: Node) => boolean;
export declare const isEditable: (element: Element) => boolean;
/**
 * 判断当前是否在根节点内
 */
export declare const inEditor: (element: Node, root?: Node) => boolean;
/**
 * 是否是光标标记节点
 * @returns
 */
export declare const isCursor: (element: Element) => boolean;
/**
 * 根据查询器查询符合条件的离当前元素节点最近的父节点
 * @param element 当前节点
 * @param selector 查询器
 * @return 返回一个 NodeEntry 实例
 */
export declare const closest: (element: Node, selector: string, callback?: (node: Node) => Node | undefined) => Node | undefined;
