import { EngineInterface } from '../../types/engine';
import { RangeInterface } from '../../types/range';
import { NodeInterface } from '../../types/node';
import { DrawStyle, TinyCanvasInterface } from '../../types/tiny-canvas';
import { CardInterface } from '../../types/card';
import { CollaborationMember, CursorAttribute } from './member';
export type CursorRect = {
    top: string;
    left: string;
    height: string | number;
    elementHeight: number;
};
declare class RangeColoring {
    private engine;
    private root;
    private hideCursorInfoTimeoutMap;
    constructor(engine: EngineInterface);
    destroy(): void;
    getRectWithRange(node: NodeInterface, range: RangeInterface): DOMRect;
    isWrapByRange(range: RangeInterface): boolean;
    drawSubRang(node: NodeInterface, canvas: TinyCanvasInterface, range: RangeInterface, style: DrawStyle): void;
    drawBackground(range: RangeInterface, options: {
        uuid: string;
        color: string;
    }): RangeInterface[];
    getNodeRect(node: NodeInterface, rect: DOMRect): DOMRect;
    getCursorRect(selector: RangeInterface | NodeInterface, leftSpace?: number): CursorRect;
    setCursorRect(uuid: string, node: NodeInterface, rect: CursorRect): void;
    showCursorInfo(node: NodeInterface, member: CollaborationMember): void;
    hideCursorInfo(node: NodeInterface): void;
    drawCursor(selector: RangeInterface | NodeInterface, member: CollaborationMember, showInfo?: boolean): NodeInterface | undefined;
    drawCard(node: NodeInterface, cursor: NodeInterface, member: CollaborationMember): void;
    setCardSelectedByOther(card: CardInterface, member?: CollaborationMember): void | NodeInterface;
    setCardActivatedByOther(card: CardInterface, member?: CollaborationMember): void | NodeInterface;
    drawRange(range: RangeInterface, member: CollaborationMember, showInfo?: boolean): void;
    updateBackgroundPosition(): void;
    updateCursorPosition(): void;
    updateCardPosition(): void;
    updatePosition(): void;
    updateBackgroundAlpha(range: RangeInterface): void;
    render(attribute: CursorAttribute, member: CollaborationMember, showInfo?: boolean): void;
    remove(uuid: string): void;
}
export default RangeColoring;
