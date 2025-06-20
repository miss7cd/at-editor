import { EditorInterface, NodeInterface, RangeInterface } from '../types';
import { SelectionInterface } from '../types/selection';
declare class Selection implements SelectionInterface {
    private readonly range;
    private readonly editor;
    key: string;
    anchor: NodeInterface | null;
    focus: NodeInterface | null;
    /**
     * 移除光标位置占位标签
     * @param value 需要移除的字符串
     */
    static removeTags: (value: string) => string;
    constructor(editor: EditorInterface, range: RangeInterface, key?: string);
    has(): boolean;
    create(): void;
    move(): void;
    getNode(source: NodeInterface, position?: 'left' | 'center' | 'right', isClone?: boolean, callback?: (node: NodeInterface) => boolean): NodeInterface;
}
export default Selection;
