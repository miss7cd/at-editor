import { CardInterface, EngineInterface } from '../../../types';
declare class Down {
    private readonly engine;
    constructor(engine: EngineInterface);
    common(component: CardInterface, event: KeyboardEvent): false | null;
    inline(component: CardInterface, event: KeyboardEvent): false | null;
    block(component: CardInterface, event: KeyboardEvent): false | null;
    trigger(event: KeyboardEvent): boolean | void | null;
}
export default Down;
