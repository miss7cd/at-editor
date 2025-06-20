import { EngineInterface, NodeInterface } from '../../../types';
declare class Backspace {
    private readonly engine;
    constructor(engine: EngineInterface);
    /**
     * 焦点移动到当前光标最接近的block节点或传入的节点前一个 Block
     * @param block 节点
     * @param isRemoveEmptyBlock 如果前一个block为空是否删除，默认为否
     */
    focusPrevBlock(block?: NodeInterface, isRemoveEmptyBlock?: boolean): void;
    /**
     * 在卡片节点处按下backspace键
     */
    trigger(event: KeyboardEvent): boolean | undefined;
}
export default Backspace;
