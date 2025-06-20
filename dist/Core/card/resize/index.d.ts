import { CardInterface, EditorInterface, NodeInterface, ResizeCreateOptions, ResizeInterface } from '../../../types';
import './index.css';
declare class Resize implements ResizeInterface {
    private editor;
    private readonly card;
    private point?;
    private options;
    private component?;
    private start;
    constructor(editor: EditorInterface, card: CardInterface);
    create(options: ResizeCreateOptions): void;
    render(container?: NodeInterface, minHeight?: number): void;
    touchStart: (event: TouchEvent) => void;
    dragStart: (event: MouseEvent) => void;
    dragMove: (event: MouseEvent) => void;
    touchMove: (event: TouchEvent) => void;
    dragEnd: () => void;
    show(): void;
    hide(): void;
    destroy(): void;
}
export default Resize;
