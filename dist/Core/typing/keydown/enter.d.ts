import { TypingHandleInterface } from '../../../types';
import DefaultKeydown from './default';
declare class Enter extends DefaultKeydown implements TypingHandleInterface {
    type: 'keydown' | 'keyup';
    hotkey: Array<string> | string;
    trigger(event: KeyboardEvent): void;
}
export default Enter;
