import { EngineInterface, TypingHandle, TypingHandleInterface, TypingInterface } from '../../types';
declare class Typing implements TypingInterface {
    private engine;
    private handleListeners;
    constructor(engine: EngineInterface);
    addHandleListener(name: string, handle: TypingHandle, triggerName?: string, triggerParams?: any | ((engine: EngineInterface, event: KeyboardEvent) => any)): void;
    getHandleListener(name: string, type: 'keydown' | 'keyup'): TypingHandleInterface | undefined;
    removeHandleListener(name: string, type: 'keydown' | 'keyup'): void;
    bindKeydown: (event: KeyboardEvent) => void;
    bindKeyup: (event: KeyboardEvent) => void;
    trigger(type: 'keydown' | 'keyup', event: KeyboardEvent): void;
    destroy(): void;
}
export default Typing;
