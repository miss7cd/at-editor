import { ChangeRangeInterface, EngineInterface, RangeInterface } from '../../types';
export type ChangeRangeOptions = {
    onSelect?: (range: RangeInterface) => void;
};
declare class ChangeRange implements ChangeRangeInterface {
    #private;
    engine: EngineInterface;
    constructor(engine: EngineInterface, options?: ChangeRangeOptions);
    setLastBlurRange(range?: RangeInterface): void;
    /**
     * 获取安全可控的光标对象
     * @param range 默认当前光标
     */
    toTrusty(range?: RangeInterface): RangeInterface;
    private setCardRang;
    get(): RangeInterface;
    select(range: RangeInterface, triggerSelect?: boolean): void;
    /**
     * 聚焦编辑器
     * @param toStart true:开始位置,false:结束位置，默认为之前操作位置
     */
    focus(toStart?: boolean): void;
    blur(): void;
}
export default ChangeRange;
