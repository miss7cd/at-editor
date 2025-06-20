import { EngineInterface } from '../../../types';
declare class Backspace {
    private readonly engine;
    constructor(engine: EngineInterface);
    trigger(event: KeyboardEvent): boolean | undefined;
}
export default Backspace;
