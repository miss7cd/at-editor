import { CardEntry, CardInterface, CardModelInterface, CardValue } from '../../types/card';
import { NodeInterface } from '../../types/node';
import { RangeInterface } from '../../types/range';
import { EditorInterface } from '../../types/editor';
import { CardActiveTrigger } from './enum';
import './index.css';
declare class CardModel implements CardModelInterface {
    classes: {
        [k: string]: CardEntry;
    };
    components: Array<CardInterface>;
    lazyRender: boolean;
    private asyncComponents;
    private editor;
    private renderTimeout?;
    constructor(editor: EditorInterface, lazyRender?: boolean);
    get active(): CardInterface<CardValue> | undefined;
    get length(): number;
    init(cards: Array<CardEntry>): void;
    renderAsyncComponents: () => Promise<void>;
    add(clazz: CardEntry): void;
    each(callback: (card: CardInterface, index?: number) => boolean | void): void;
    closest(selector: Node | NodeInterface, ignoreEditable?: boolean): NodeInterface | undefined;
    find<E extends CardValue = object, T extends CardInterface<E> = CardInterface<E>>(selector: string | Node | NodeInterface, ignoreEditable?: boolean): T | undefined;
    findBlock<E extends CardValue = object, T extends CardInterface<E> = CardInterface<E>>(selector: Node | NodeInterface): T | undefined;
    getSingleCard<E extends CardValue = object, T extends CardInterface<E> = CardInterface<E>>(range: RangeInterface): T | undefined;
    getSingleSelectedCard<E extends CardValue = object, T extends CardInterface<E> = CardInterface<E>>(range: RangeInterface): T | undefined;
    insertNode<E extends CardValue = object, T extends CardInterface<E> = CardInterface<E>>(range: RangeInterface, card: T, ...args: any): T;
    removeNode(card: CardInterface): void;
    updateNode(card: CardInterface, value: CardValue, ...args: any): void;
    replaceNode(node: NodeInterface, name: string, value?: CardValue): NodeInterface;
    activate(node: NodeInterface, trigger?: CardActiveTrigger, event?: MouseEvent): void;
    select(card: CardInterface, event?: MouseEvent | KeyboardEvent): void;
    focus(card: CardInterface, toStart?: boolean): void;
    insert<E extends CardValue = object, T extends CardInterface<E> = CardInterface<E>>(name: string, value?: E, ...args: any): T;
    update(selector: NodeInterface | Node | string, value: CardValue, ...args: any): void;
    replace<E extends CardValue = object, T extends CardInterface<E> = CardInterface<E>>(source: CardInterface, name: string, value?: E, ...args: any): T;
    remove(selector: NodeInterface | Node | string, hasModify?: boolean): void;
    removeRemote(selector: NodeInterface | Node | string): void;
    create<E extends CardValue = object, T extends CardInterface<E> = CardInterface<E>>(name: string, options?: {
        value?: E;
        root?: NodeInterface;
    }): T;
    createCursor(component: CardInterface): void;
    reRender(...cards: Array<CardInterface>): void;
    /**
     * 渲染
     * @param container 需要重新渲染包含卡片的节点，如果不传，则渲染全部待创建的卡片节点
     * @param callback 渲染完成后回调
     * @param lazyRender 是否懒渲染，默认取决于editor的lazyRender属性
     */
    render(container?: NodeInterface, callback?: (count: number) => void, lazyRender?: boolean): void;
    renderComponent(card: CardInterface, ...args: any): void;
    removeComponent(card: CardInterface): void;
    gc(): void;
    destroy(): void;
    focusPrevBlock(card: CardInterface, range: RangeInterface, hasModify: boolean): void;
    focusNextBlock(card: CardInterface, range: RangeInterface, hasModify: boolean): void;
}
export default CardModel;
