import { EditorInterface, NodeInterface, RangeInterface } from '../../types';
import { ListInterface, ListModelInterface } from '../../types/list';
import { Backspace } from './typing';
declare class List implements ListModelInterface {
    private editor;
    /**
     * 自定义列表样式
     */
    readonly CUSTOMZIE_UL_CLASS = "data-list";
    /**
     * 自定义列表样式
     */
    readonly CUSTOMZIE_LI_CLASS = "data-list-item";
    /**
     * 列表缩进key
     */
    readonly INDENT_KEY = "data-indent";
    /**
     * 列表项point位置
     */
    readonly STYLE_POSITION_NAME = "list-style-position";
    readonly STYLE_POSITION_VALUE = "inside";
    backspaceEvent?: Backspace;
    constructor(editor: EditorInterface);
    init(): void;
    /**
     * 判断列表项节点是否为空
     * @param node 节点
     */
    isEmptyItem(node: NodeInterface): boolean;
    /**
     * 判断两个节点是否是一样的List节点
     * @param sourceNode 源节点
     * @param targetNode 目标节点
     */
    isSame(sourceNode: NodeInterface, targetNode: NodeInterface): boolean;
    /**
     * 判断节点集合是否是指定类型的List列表
     * @param blocks 节点集合
     * @param name 节点标签类型
     * @param card 是否是指定的自定义列表项的卡片名称
     */
    isSpecifiedType(blocks: Array<NodeInterface>, name?: 'ul' | 'ol', card?: string): boolean;
    getPlugins(): ListInterface<import("../../types").PluginOptions>[];
    /**
     * 根据节点获取列表插件名称
     * @param block 节点
     */
    getPluginNameByNode(block: NodeInterface): string;
    /**
     * 获取列表插件名称
     * @param blocks 节点集合
     */
    getPluginNameByNodes(blocks: Array<NodeInterface>): string;
    /**
     * 清除自定义列表节点相关属性
     * @param node 节点
     */
    unwrapCustomize(node: NodeInterface): NodeInterface;
    /**
     * 取消节点的列表
     * @param blocks 节点集合
     * @param normalBlock 要转换的block默认为 <p />
     */
    unwrap(blocks: Array<NodeInterface>, normalBlock?: NodeInterface): void;
    /**
     * 获取当前选区的修复列表后的节点集合
     */
    normalize(range?: RangeInterface): NodeInterface[];
    /**
     * 将选中列表项列表分割出来单独作为一个列表
     */
    split(range?: RangeInterface): void;
    merge(blocks?: Array<NodeInterface>, range?: RangeInterface): void;
    /**
     * 给列表添加start序号
     * @param block 列表节点
     */
    addStart(block?: NodeInterface): void;
    /**
     * 给列表节点增加缩进
     * @param block 列表节点
     * @param value 缩进值
     */
    addIndent(block: NodeInterface, value: number, maxValue?: number): void;
    /**
     * 获取列表节点 indent 值
     * @param block 列表节点
     * @returns
     */
    getIndent(block: NodeInterface): number;
    /**
     * 给列表节点增加文字方向
     * @param block 列表项节点
     * @param align 方向
     * @returns
     */
    addAlign(block: NodeInterface, align?: 'left' | 'center' | 'right' | 'justify'): void;
    /**
     * 为自定义列表项添加卡片节点
     * @param node 列表节点项
     * @param cardName 卡片名称，必须是支持inline卡片类型
     * @param value 卡片值
     */
    addCardToCustomize(node: NodeInterface | Node, cardName: string, value?: any): import("../../types").CardInterface<object> | undefined;
    /**
     * 为自定义列表项添加待渲染卡片节点
     * @param node 列表节点项
     * @param cardName 卡片名称，必须是支持inline卡片类型
     * @param value 卡片值
     */
    addReadyCardToCustomize(node: NodeInterface | Node, cardName: string, value?: any): NodeInterface | undefined;
    /**
     * 给列表添加BR标签
     * @param node 列表节点项
     */
    addBr(node: NodeInterface): void;
    insert(fragment: DocumentFragment, range?: RangeInterface): void;
    /**
     * block 节点转换为列表项节点
     * @param block block 节点
     * @param root 列表根节点
     * @param cardName 可选，自定义列表项卡片名称
     * @param value 可选，自定义列表项卡片值
     * @returns
     */
    blockToItem(block: NodeInterface, root: NodeInterface, cardName?: string, value?: string): NodeInterface;
    /**
     * 将节点转换为自定义节点
     * @param blocks 节点
     * @param cardName 卡片名称
     * @param value 卡片值
     */
    toCustomize(blocks: Array<NodeInterface> | NodeInterface, cardName: string, value?: any, tagName?: 'ol' | 'ul'): NodeInterface | NodeInterface[];
    /**
     * 将节点转换为列表节点
     * @param blocks 节点
     * @param tagName 列表节点名称，ul 或者 ol
     * @param start 有序列表开始序号
     */
    toNormal(blocks: Array<NodeInterface> | NodeInterface, tagName?: 'ul' | 'ol', start?: number): NodeInterface | NodeInterface[];
    /**
     * 判断选中的区域是否在List列表的开始
     */
    isFirst(range: RangeInterface): boolean;
    /**
     * 判断选中的区域是否在List列表的末尾
     */
    isLast(range: RangeInterface): boolean;
}
export default List;
