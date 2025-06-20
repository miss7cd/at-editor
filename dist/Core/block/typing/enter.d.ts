import { EngineInterface } from '../../../types';
declare class Enter {
    private engine;
    constructor(engine: EngineInterface);
    trigger(event: KeyboardEvent): boolean | undefined;
}
export default Enter;
