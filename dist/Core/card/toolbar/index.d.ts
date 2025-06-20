import type { EditorInterface, CardInterface, CardToolbarInterface, CardToolbarItemOptions, ToolbarItemOptions, NodeInterface } from '../../../types';
import placements from '../../position/placements';
import './index.css';
export declare const isCardToolbarItemOptions: (item: ToolbarItemOptions | CardToolbarItemOptions) => item is CardToolbarItemOptions;
declare class CardToolbar implements CardToolbarInterface {
    #private;
    private card;
    private toolbar?;
    private editor;
    private offset?;
    private position;
    private dndPosition;
    constructor(editor: EditorInterface, card: CardInterface);
    setDefaultAlign(align: keyof typeof placements): void;
    clearHide: () => void;
    clearShow: () => void;
    enterHide: () => void;
    enterShow: () => void;
    bindEnterShow(): void;
    unbindEnterShow(): void;
    /**
     * 设置工具栏偏移量[上x，上y，下x，下y]
     * @param offset 偏移量 [tx,ty,bx,by]
     */
    setOffset(offset: Array<number>): void;
    getContainer(): NodeInterface | undefined;
    getDefaultItem(item: CardToolbarItemOptions): ToolbarItemOptions | undefined;
    getItems(): [ToolbarItemOptions[], (ToolbarItemOptions | CardToolbarItemOptions)[]];
    create(): void;
    update(): void;
    hide(): void;
    show(): void;
    hideCardToolbar(): void;
    showDnd(): void;
    showCardToolbar(): void;
    private createDnd;
    destroy(): void;
}
export default CardToolbar;
