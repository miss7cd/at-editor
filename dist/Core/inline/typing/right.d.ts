import { EngineInterface } from '../../../types';
declare class Right {
    private engine;
    constructor(engine: EngineInterface);
    trigger(event: KeyboardEvent): boolean | undefined;
}
export default Right;
