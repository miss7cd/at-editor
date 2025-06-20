import { TypingHandleInterface } from '../../../types';
import Default from './default';
declare class Left extends Default implements TypingHandleInterface {
    type: 'keydown' | 'keyup';
    hotkey: (event: KeyboardEvent) => boolean;
}
export default Left;
