import { EditorInterface, NodeInterface } from '../../types';
import placements from './placements';
declare class Position {
    #private;
    constructor(editor: EditorInterface);
    bind(container: NodeInterface, target: NodeInterface, defaultAlign?: keyof typeof placements, offset?: Array<number>, onUpdate?: (rect: any) => void): void;
    setOffset(offset: Array<number>): void;
    updateListener: () => void;
    update: (triggerUpdate?: boolean) => void;
    destroy(): void;
}
export default Position;
