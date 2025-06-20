import { CardInterface, EngineInterface, RangeInterface } from '../../../types';
declare class Enter {
    private readonly engine;
    constructor(engine: EngineInterface);
    /**
     * 在卡片处插入空段落
     * @param range 光标
     * @param card 卡片
     * @param isStart 是否聚焦到开始位置
     */
    insertNewline(range: RangeInterface, card: CardInterface, isStart: boolean): void;
    /**
     * 在卡片节点处按下enter键
     */
    trigger(event: KeyboardEvent): boolean;
}
export default Enter;
