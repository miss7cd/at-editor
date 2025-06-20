import { CardInterface, EngineInterface, RangeInterface } from '../../../types';
declare class Left {
    private engine;
    constructor(engine: EngineInterface);
    inline(card: CardInterface, event: KeyboardEvent): boolean | void;
    block(component: CardInterface, event: KeyboardEvent): boolean | void;
    fincPrevCard(range: RangeInterface): CardInterface<object> | null | undefined;
    trigger(event: KeyboardEvent): boolean | void;
}
export default Left;
