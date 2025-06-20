import { EngineInterface } from '../../../types';
declare class Backspace {
    private engine;
    constructor(engine: EngineInterface);
    /**
     * 列表删除事件
     * @param e 事件
     * @param isDeepMerge 是否深度合并
     */
    trigger(event: KeyboardEvent, isDeepMerge?: boolean): boolean | undefined;
}
export default Backspace;
