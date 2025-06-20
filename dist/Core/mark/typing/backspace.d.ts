import { EngineInterface } from '../../../types';
declare class Backspace {
    private engine;
    constructor(engine: EngineInterface);
    /**
     * 在inline节点处按下backspace键
     */
    trigger(): true | undefined;
}
export default Backspace;
