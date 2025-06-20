import { EventEmitter2 } from 'eventemitter2';
import { EngineInterface } from '../../types/engine';
import { RangeInterface, RangePath } from '../../types/range';
import { CardInterface } from '../../types/card';
import { NodeInterface } from '../../types/node';
import { CollaborationMember, CursorAttribute } from './member';
export interface SelectionInterface extends EventEmitter2 {
    /**
     * 当前光标路径
     */
    currentRangePath?: {
        start: RangePath;
        end: RangePath;
    };
    /**
     * 触发选择改变
     */
    emitSelectChange: (refreshBG?: boolean) => void;
    /**
     * 设置用户属性
     * @param attr
     */
    setAttribute(attr: CursorAttribute, member: CollaborationMember, refreshBG?: boolean): void;
    /**
     * 移除用户属性
     * @param uuid
     */
    removeAttirbute(uuid: string): void;
    /**
     * 获取用户属性
     * @param uuid
     */
    getAttribute(uuid: string): CursorAttribute | undefined;
    refreshAttributes(...members: CollaborationMember[]): void;
    destroy(): void;
}
declare class ModelSelection extends EventEmitter2 implements SelectionInterface {
    private engine;
    private rangeColoring;
    currentRangePath?: {
        start: RangePath;
        end: RangePath;
    };
    data: Map<string, CursorAttribute>;
    member: ReturnType<typeof CollaborationMember.fromEngine>;
    constructor(engine: EngineInterface);
    handleResize: () => void;
    handleScroll: (node: NodeInterface) => void;
    handleMouseDown: () => void;
    private mouseUpTimeout;
    handleMouseUp: () => void;
    getCardResizeRange(card: CardInterface): RangeInterface | null;
    private observer;
    emitSelectChange: (refreshBG?: boolean) => void;
    setAttribute(attr: CursorAttribute, member: CollaborationMember, refreshBG?: boolean, showInfo?: boolean): void;
    removeAttirbute(uuid: string): void;
    getAttribute(uuid: string): CursorAttribute | undefined;
    onSelectionChange(range: RangeInterface, force?: boolean, refreshBG?: boolean, showInfo?: boolean): void;
    refreshAttributes(...members: CollaborationMember[]): void;
    destroy(): void;
}
export default ModelSelection;
