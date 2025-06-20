import { NodeInterface } from '../types/node';
import { RangeInterface, RangePath } from '../types/range';
import { SelectionInterface } from '../types/selection';
import { EditorInterface } from '../types/editor';
declare class Range implements RangeInterface {
    private readonly editor;
    static create: (editor: EditorInterface, doc?: Document, point?: {
        x: number;
        y: number;
    }) => RangeInterface;
    static from: (editor: EditorInterface, win?: Window | globalThis.Selection | globalThis.Range, clone?: boolean) => RangeInterface | null;
    static fromPath: (editor: EditorInterface, path: {
        start: RangePath;
        end: RangePath;
    }, includeCardCursor?: boolean, root?: NodeInterface) => RangeInterface;
    base: globalThis.Range;
    get collapsed(): boolean;
    get endOffset(): number;
    get startOffset(): number;
    get startContainer(): Node;
    get endContainer(): Node;
    get commonAncestorContainer(): Node;
    constructor(editor: EditorInterface, range: globalThis.Range);
    cloneContents(): DocumentFragment;
    deleteContents(): void;
    extractContents(): DocumentFragment;
    getBoundingClientRect(): DOMRect;
    getClientRects(): DOMRectList;
    insertNode(node: Node | NodeInterface): void;
    isPointInRange(node: Node | NodeInterface, offset: number): boolean;
    comparePoint(node: Node | NodeInterface, offset: number): number;
    setEnd(node: Node | NodeInterface, offset: number): void;
    setEndAfter(node: Node | NodeInterface): void;
    setEndBefore(node: Node | NodeInterface): void;
    setStart(node: Node | NodeInterface, offset: number): void;
    setStartAfter(node: Node | NodeInterface): void;
    setStartBefore(node: Node | NodeInterface): void;
    toString(): string;
    get startNode(): NodeInterface;
    get endNode(): NodeInterface;
    get commonAncestorNode(): NodeInterface;
    toRange: () => globalThis.Range;
    collapse: (toStart?: boolean) => this;
    cloneRange: () => RangeInterface;
    /**
     * 选中一个节点
     * @param node 节点
     * @param contents 是否只选中内容
     */
    select: (node: NodeInterface | Node, contents?: boolean) => this;
    getText: () => string | null;
    /**
     * 获取光标所占的区域
     */
    getClientRect: () => DOMRect;
    /**
     * 将选择标记从 TextNode 扩大到最近非TextNode节点
     * range 实质所选择的内容不变
     */
    enlargeFromTextNode: () => this;
    /**
     * 将选择标记从非 TextNode 缩小到TextNode节点上，与 enlargeFromTextNode 相反
     * range 实质所选择的内容不变
     */
    shrinkToTextNode: () => this;
    /**
     * 扩大边界
     * <p><strong><span>[123</span>abc]</strong>def</p>
     * to
     * <p>[<strong><span>123</span>abc</strong>]def</p>
     * @param range 选区
     * @param toBlock 是否扩大到块级节点
     * @param toTop 是否尽可能扩大的可编辑节点下
     */
    enlargeToElementNode: (toBlock?: boolean, toTop?: boolean) => this;
    /**
     * 缩小边界
     * <body>[<p><strong>123</strong></p>]</body>
     * to
     * <body><p><strong>[123]</strong></p></body>
     * @param range 选区
     */
    shrinkToElementNode: () => this;
    /**
     * 创建 selection，通过插入 span 节点标记位置
     * @param key 唯一标识
     */
    createSelection: (key?: string) => SelectionInterface;
    /**
     * 获取子选区集合
     * @param includeCard 是否包含卡片
     * @param filterSingleSelectableCard 是否过滤掉 singleSelectable = false 的卡片（不能单独选中）
     */
    getSubRanges: (includeCard?: boolean, filterSingleSelectableCard?: boolean) => RangeInterface[];
    setOffset: (node: Node | NodeInterface, start: number, end: number) => RangeInterface;
    findElements: () => Node[];
    inCard: () => boolean;
    getStartOffsetNode: () => Node;
    getEndOffsetNode: () => Node;
    scrollIntoView: () => void;
    scrollRangeIntoView: () => void;
    scrollIntoViewIfNeeded: (container: NodeInterface | undefined, view: NodeInterface) => void;
    containsCard: () => boolean;
    /**
     * 在光标位置对blcok添加或者删除br标签
     * @param isLeft
     */
    handleBr: (isLeft?: boolean) => this;
    /**
     * 获取开始位置前的节点
     * <strong>foo</strong>|bar
     */
    getPrevNode: () => NodeInterface | undefined;
    /**
     * 获取结束位置后的节点
     * foo|<strong>bar</strong>
     */
    getNextNode: () => NodeInterface | undefined;
    deepCut(): void;
    /**
     * 对比两个范围是否相等
     * @param range 范围
     */
    equal(range: RangeInterface | globalThis.Range): boolean;
    /**
     * 获取当前选区最近的根节点
     */
    getRootBlock(): NodeInterface | undefined;
    filterPath(includeCardCursor?: boolean): (node: Node) => boolean;
    toPath(includeCardCursor?: boolean, root?: NodeInterface): {
        start: RangePath;
        end: RangePath;
    } | undefined;
}
export default Range;
export declare const isSelection: (param: Window | globalThis.Selection | globalThis.Range) => param is globalThis.Selection;
export declare const isRange: (param: Window | globalThis.Selection | globalThis.Range) => param is globalThis.Range;
export declare const isRangeInterface: (selector: NodeInterface | RangeInterface) => selector is RangeInterface;
