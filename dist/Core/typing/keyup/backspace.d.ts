import { TypingHandleInterface } from '../../../types';
import DefaultKeyup from './default';
declare class Backspace extends DefaultKeyup implements TypingHandleInterface {
    type: 'keydown' | 'keyup';
    hotkey: Array<string> | string;
    trigger(event: KeyboardEvent): void;
}
export default Backspace;
