import { CardOptions, CardInterface, CardToolbarItemOptions, CardToolbarInterface, ResizeInterface, CardValue } from '../../types/card';
import { EditorInterface } from '../../types/editor';
import { NodeInterface } from '../../types/node';
import { RangeInterface } from '../../types/range';
import { ToolbarItemOptions } from '../../types/toolbar';
import { TinyCanvasInterface } from '../../types/tiny-canvas';
import { CardType, SelectStyleType } from './enum';
declare abstract class CardEntry<T extends CardValue = CardValue> implements CardInterface<T> {
    protected readonly editor: EditorInterface;
    readonly root: NodeInterface;
    toolbarModel?: CardToolbarInterface;
    resizeModel?: ResizeInterface;
    activatedByOther: string | false;
    selectedByOther: string | false;
    /**
     * 可编辑的节点
     */
    readonly contenteditable: Array<string>;
    static readonly cardName: string;
    static readonly cardType: CardType;
    static readonly autoActivate: boolean;
    static readonly autoSelected: boolean;
    static readonly singleSelectable: boolean;
    static readonly collab: boolean;
    static readonly focus: boolean;
    static readonly selectStyleType: SelectStyleType;
    static readonly lazyRender: boolean;
    private defaultMaximize;
    isMaximize: boolean;
    private readonly _id;
    get isEditable(): boolean;
    get activated(): boolean;
    private setActivated;
    get selected(): boolean;
    private setSelected;
    get id(): any;
    get name(): string;
    get type(): CardType;
    set type(type: CardType);
    get loading(): boolean;
    constructor({ editor, value, root }: CardOptions<T>);
    init(): void;
    private getId;
    setValue(value: Partial<T>): void;
    getValue(): T;
    /**
     * 获取Card内的 DOM 节点
     * @param selector
     */
    find(selector: string): NodeInterface;
    findByKey(key: string): NodeInterface | undefined;
    activate(activated: boolean): void;
    select(selected: boolean): void;
    getCenter(): NodeInterface;
    isCenter(node: NodeInterface): boolean;
    isCursor(node: NodeInterface): boolean;
    isLeftCursor(node: NodeInterface): boolean;
    isRightCursor(node: NodeInterface): boolean;
    focus(range: RangeInterface, toStart?: boolean): void;
    /**
     * 当卡片聚焦时触发
     */
    onFocus?(): void;
    maximize(): void;
    minimize(): void;
    /**
     * 工具栏配置项
     */
    toolbar?(): Array<CardToolbarItemOptions | ToolbarItemOptions>;
    /**
     * 是否可改变卡片大小，或者传入渲染节点
     */
    resize?: boolean | (() => NodeInterface | void);
    onSelect(selected: boolean): void;
    onSelectByOther(selected: boolean, value?: {
        color: string;
        rgb: string;
    }): NodeInterface | void;
    onSelectLeft?(event: KeyboardEvent): boolean | void;
    onSelectRight?(event: KeyboardEvent): boolean | void;
    onSelectUp?(event: KeyboardEvent): boolean | void;
    onSelectDown?(event: KeyboardEvent): boolean | void;
    onActivate(activated: boolean): void;
    onActivateByOther(activated: boolean, value?: {
        color: string;
        rgb: string;
    }): NodeInterface | void;
    onChange?(trigger: 'remote' | 'local', node: NodeInterface): void;
    writeHistoryOnValueChange?(value: T): void | false;
    private initToolbar;
    private initResize;
    didInsert?(): void;
    didUpdate(): void;
    beforeRender(): void;
    didRender(): void;
    abstract render(): NodeInterface | string | void;
    drawBackground?(node: NodeInterface, range: RangeInterface, targetCanvas: TinyCanvasInterface): DOMRect | RangeInterface[] | void | false;
    /**
     * 获取卡片区域选中的所有节点
     */
    getSelectionNodes?(): Array<NodeInterface>;
    executeMark?(mark: NodeInterface): void;
    queryMarks?(): NodeInterface[];
    destroy(): void;
}
export default CardEntry;
