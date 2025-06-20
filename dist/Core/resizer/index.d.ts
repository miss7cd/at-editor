import type { NodeInterface, EventListener } from '../../types';
import type { ResizerInterface, ResizerOptions, ResizerPosition } from '../../types';
import './index.css';
declare class Resizer implements ResizerInterface {
    private options;
    private root;
    private image?;
    private resizerNumber;
    private point;
    private position?;
    private size;
    maxWidth: number;
    /**
     * 是否改变大小中
     */
    private resizing;
    constructor(options: ResizerOptions);
    renderTemplate(imgUrl?: string): string;
    onMouseDown(event: MouseEvent | TouchEvent, position: ResizerPosition): void;
    onMouseMove: (event: MouseEvent | TouchEvent) => void;
    onMouseUp: (event: MouseEvent | TouchEvent) => void;
    updateSize(width: number, height: number): void;
    setSize(width: number, height: number): void;
    on(eventType: string, listener: EventListener): void;
    off(eventType: string, listener: EventListener): void;
    render(): NodeInterface;
    destroy(): void;
}
export default Resizer;
