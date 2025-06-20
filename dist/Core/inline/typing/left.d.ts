import { EngineInterface } from '../../../types';
declare class Left {
    private engine;
    constructor(engine: EngineInterface);
    trigger(event: KeyboardEvent): boolean | undefined;
}
export default Left;
