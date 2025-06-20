import { NodeInterface } from '../../types/node';
export declare const getDocument: (node?: Node) => Document;
/**
 * 移除空的文本节点，并连接相邻的文本节点
 * @param node 节点
 */
export declare const combinText: (node: NodeInterface | Node) => void;
/**
 * 获取一个 dom 元素内所有的 textnode 类型的元素
 * @param  {Node} node - dom节点
 * @param  {Function} filter - 过滤器
 * @return {Array} 获取的文本节点
 */
export declare const getTextNodes: (node: Node, filter?: (node: Node) => boolean) => Array<Node>;
export declare const getParentInRoot: (node: Node) => ParentNode | undefined;
