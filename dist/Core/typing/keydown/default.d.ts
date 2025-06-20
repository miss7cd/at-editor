import { EngineInterface, TypingEventListener, TypingHandleInterface } from '../../../types';
declare class DefaultKeydown implements TypingHandleInterface {
    type: 'keydown' | 'keyup';
    hotkey: string | string[] | ((event: KeyboardEvent) => boolean);
    listeners: Array<TypingEventListener>;
    engine: EngineInterface;
    constructor(engine: EngineInterface);
    on(listener: TypingEventListener): void;
    unshiftOn(listener: TypingEventListener): void;
    off(listener: TypingEventListener): void;
    trigger(event: KeyboardEvent): void;
    destroy(): void;
}
export default DefaultKeydown;
