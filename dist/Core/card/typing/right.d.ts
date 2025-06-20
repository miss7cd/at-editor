import { CardInterface, EngineInterface, RangeInterface } from '../../../types';
declare class Right {
    private readonly engine;
    constructor(engine: EngineInterface);
    inline(card: CardInterface, event: KeyboardEvent): boolean | void;
    block(component: CardInterface, event: KeyboardEvent): boolean | void;
    fincNextCard(range: RangeInterface): CardInterface<object> | null | undefined;
    trigger(event: KeyboardEvent): boolean | void;
}
export default Right;
