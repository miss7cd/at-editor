import { TypingHandleInterface } from '../../../types';
import DefaultKeydown from './default';
declare class Right extends DefaultKeydown implements TypingHandleInterface {
    type: 'keydown' | 'keyup';
    hotkey: (event: KeyboardEvent) => boolean;
}
export default Right;
