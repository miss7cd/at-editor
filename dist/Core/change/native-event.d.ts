import { EngineInterface, RangeInterface } from '../../types';
declare class NativeEvent {
    #private;
    engine: EngineInterface;
    constructor(engine: EngineInterface);
    repairInput(event: InputEvent, range: RangeInterface): void;
    private prevSelection;
    handleSelectionChange(): void;
    init(): void;
    paste(source: string, range?: RangeInterface, callback?: (count: number) => void, followActiveMark?: boolean, insert?: (fragment: DocumentFragment, range?: RangeInterface, callback?: (range: RangeInterface) => void, followActiveMark?: boolean) => void, forceGenerateAllId?: boolean): void;
}
export default NativeEvent;
