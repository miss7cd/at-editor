import { EditorInterface, NodeInterface, RangeInterface } from '../../types';
import { BlockInterface, BlockModelInterface } from '../../types/block';
declare class Block implements BlockModelInterface {
    private editor;
    constructor(editor: EditorInterface);
    init(): void;
    /**
     * 解析markdown
     * @param event 事件
     */
    triggerMarkdown(event: KeyboardEvent): boolean | undefined;
    pluginCaches: Map<string, BlockInterface>;
    /**
     * 根据节点查找block插件实例
     * @param node 节点
     */
    findPlugin(block: NodeInterface): BlockInterface | undefined;
    /**
     * 查找Block节点的一级节点。如 div -> H2 返回 H2节点
     * @param parentNode 父节点
     * @param childNode 子节点
     */
    findTop(parentNode: NodeInterface, childNode: NodeInterface): NodeInterface;
    /**
     * 获取最近的block节点，找不到返回 node
     * @param node 节点
     * @param callback 回调
     */
    closest(node: NodeInterface, callback?: (node: NodeInterface) => boolean): NodeInterface;
    /**
     * 在光标位置包裹一个block节点
     * @param block 节点
     * @param range 光标
     */
    wrap(block: NodeInterface | Node | string, range?: RangeInterface): void;
    /**
     * 移除光标所在block节点包裹
     * @param block 节点
     * @param range 光标
     */
    unwrap(block: NodeInterface | Node | string, range?: RangeInterface): void;
    /**
     * 获取节点相对于光标开始位置、结束位置下的兄弟节点集合
     * @param range 光标
     * @param block 节点
     */
    getSiblings(range: RangeInterface, block: NodeInterface): {
        node: NodeInterface;
        position: "left" | "center" | "right";
    }[];
    /**
     * 分割当前光标选中的block节点
     * @param range 光标
     */
    split(range?: RangeInterface): NodeInterface | undefined;
    /**
     * 在当前光标位置插入block节点
     * @param block 节点
     * @param range 光标
     * @param splitNode 分割节点，默认为光标开始位置的block节点
     */
    insert(block: NodeInterface | Node | string, range?: RangeInterface, splitNode?: (node: NodeInterface) => NodeInterface, removeCurrentEmptyBlock?: boolean): void;
    /**
     * 设置当前光标所在的所有block节点为新的节点或设置新属性
     * @param block 需要设置的节点或者节点属性
     * @param range 光标
     */
    setBlocks(block: string | {
        [k: string]: any;
    }, range?: RangeInterface): void;
    /**
     * 合并当前光标位置相邻的block
     * @param range 光标
     */
    merge(range?: RangeInterface): void;
    /**
     * 获取对范围有效果的所有 Block
     */
    findBlocks(range: RangeInterface): NodeInterface[];
    /**
     * 判断范围的 {Edge}Offset 是否在 Block 的开始位置
     * @param range 光标
     * @param edge start ｜ end
     */
    isFirstOffset(range: RangeInterface, edge: 'start' | 'end'): boolean;
    /**
     * 判断范围的 {Edge}Offset 是否在 Block 的最后位置
     * @param range 光标
     * @param edge start ｜ end
     */
    isLastOffset(range: RangeInterface, edge: 'start' | 'end'): boolean;
    /**
     * 获取范围内的所有 Block
     * @param range  光标s
     */
    getBlocks(range: RangeInterface): NodeInterface[];
    /**
     * 获取block节点到光标所在位置的blcok节点
     * @param options { block, range, isLeft, clone, keepDataId }
     * @returns
     */
    getBlockByRange({ block, range, isLeft, clone, keepDataId }: {
        block: NodeInterface | Node;
        range: RangeInterface;
        isLeft: boolean;
        clone?: boolean;
        keepDataId?: boolean;
    }): NodeInterface;
    /**
     * 获取 Block 左侧文本
     * @param block 节点
     */
    getLeftText(block: NodeInterface | Node, range?: RangeInterface): string;
    /**
     * 删除 Block 左侧文本
     * @param block 节点
     */
    removeLeftText(block: NodeInterface | Node, range?: RangeInterface): void;
    /**
     * 扁平化block节点，防止错误嵌套
     * @param block 节点
     * @param root 根节点
     */
    flat(block: NodeInterface, root: NodeInterface): void;
    /**
     * 插入一个空的block节点
     * @param range 光标所在位置
     * @param block 节点
     * @returns
     */
    insertEmptyBlock(range: RangeInterface, block: NodeInterface): void;
    /**
     * 在光标位置插入或分割节点
     * @param range 光标所在位置
     * @param block 节点
     */
    insertOrSplit(range: RangeInterface, block: NodeInterface): void;
}
export default Block;
