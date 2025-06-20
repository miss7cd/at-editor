import { CardInterface, EngineInterface } from '../../../types';
declare class Down {
    private readonly engine;
    constructor(engine: EngineInterface);
    common(component: CardInterface, event: KeyboardEvent): false | undefined;
    inline(component: CardInterface, event: KeyboardEvent): false | undefined;
    block(component: CardInterface, event: KeyboardEvent): false | undefined;
    trigger(event: KeyboardEvent): boolean | void;
}
export default Down;
