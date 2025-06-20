import { EventListener } from '../../types/node';
import { ChangeEventInterface, ChangeEventOptions } from '../../types/change';
import { CardInterface } from '../../types/card';
import { EngineInterface } from '../../types/engine';
import { RangeInterface } from '../../types/range';
import { ClipboardData } from '../../types/clipboard';
type GlobalEventType = 'root' | 'window' | 'container' | 'document';
declare class ChangeEvent implements ChangeEventInterface {
    private events;
    private globalEvents;
    private readonly engine;
    isComposing: boolean;
    isSelecting: boolean;
    private dragoverHelper;
    private readonly options;
    private keydownRange;
    constructor(engine: EngineInterface, options?: ChangeEventOptions);
    isCardInput(e: Event): boolean;
    onInput(callback: EventListener): void;
    onSelect(callback: EventListener, onStart?: EventListener, onEnd?: EventListener): void;
    onPaste(callback: (data: ClipboardData & {
        isPasteText: boolean;
    }) => void): void;
    onDrop(callback: (params: {
        event: DragEvent;
        range?: RangeInterface;
        card?: CardInterface;
        files: Array<File>;
    }) => void): void;
    onDocument(eventType: string, listener: EventListener, index?: number): void;
    onWindow(eventType: string, listener: EventListener, index?: number): void;
    onContainer(eventType: string, listener: EventListener, index?: number): void;
    onRoot(eventType: string, listener: EventListener, index?: number): void;
    addEvent(type: GlobalEventType, eventType: string, listener: EventListener, index?: number): void;
    destroy(): void;
}
export default ChangeEvent;
