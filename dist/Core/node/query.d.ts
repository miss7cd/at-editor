import { NodeInterface, Selector, Context, NodeEntry } from '../../types/node';
/**
 * 查询节点返回NodeInterface
 * @param selector 选择器
 * @param context 节点上下文，或根节点
 * @param nodeConstructor 需要使用的模型，默认 DOMNOde
 */
declare const _default: (selector: Selector, context?: Context | null | false, clazz?: NodeEntry) => NodeInterface;
export default _default;
