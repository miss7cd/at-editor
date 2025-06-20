import { CardInterface, EngineInterface } from '../../../types';
declare class Default {
    private readonly engine;
    constructor(engine: EngineInterface);
    block(component: CardInterface, event: KeyboardEvent): boolean;
    trigger(event: KeyboardEvent): boolean;
}
export default Default;
