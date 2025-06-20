import { RangeInterface, TypingHandleInterface } from '../../../types';
import DefaultKeydown from './default';
declare class Delete extends DefaultKeydown implements TypingHandleInterface {
    type: 'keydown' | 'keyup';
    hotkey: string | string[] | ((event: KeyboardEvent) => boolean);
    getNext(node: Node): Node | null;
    getRange(node: Node, hasNext?: boolean): RangeInterface | null;
    trigger(event: KeyboardEvent): void;
}
export default Delete;
