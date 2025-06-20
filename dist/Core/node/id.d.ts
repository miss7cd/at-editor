import { NodeIdInterface, NodeInterface, SchemaInterface, SchemaRule } from '../../types';
declare class NodeId implements NodeIdInterface {
    schema: SchemaInterface;
    rules: {
        [key: string]: SchemaRule[];
    };
    constructor(editor: SchemaInterface);
    init(): void;
    /**
     * 根据规则获取需要为节点创建 data-id 的标签名称集合
     * @returns
     */
    getRules(): {
        [key: string]: SchemaRule[];
    };
    /**
     * 给节点创建data-id
     * @param node 节点
     * @returns
     */
    create(node: Node | NodeInterface): string;
    /**
     * 在根节点内为需要创建data-id的子节点创建data-id
     * @param root 根节点
     * @param force
     */
    generateAll(root: Element | NodeInterface | DocumentFragment, force?: boolean): void;
    /**
     * 为节点创建一个随机data-id
     * @param node 节点
     * @param force
     * @returns
     */
    generate(node: Node | NodeInterface, force?: boolean): string | undefined;
    isNeed(node: NodeInterface): boolean;
}
export default NodeId;
