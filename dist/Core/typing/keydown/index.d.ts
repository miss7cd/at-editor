import { EngineInterface, TypingHandle } from '../../../types';
declare const defaultHandles: Array<{
    name: string;
    triggerName?: string;
    handle: TypingHandle;
    triggerParams?: any | ((engine: EngineInterface, event: KeyboardEvent) => any);
}>;
export default defaultHandles;
