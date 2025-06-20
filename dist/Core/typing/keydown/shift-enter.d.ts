import { TypingHandleInterface } from '../../../types';
import DefaultKeydown from './default';
declare class ShitEnter extends DefaultKeydown implements TypingHandleInterface {
    type: 'keydown' | 'keyup';
    hotkey: string | string[] | ((event: KeyboardEvent) => boolean);
    trigger(event: KeyboardEvent): void;
}
export default ShitEnter;
