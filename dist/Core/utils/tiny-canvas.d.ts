import { DrawOptions, DrawStyle, TinyCanvasInterface } from '../../types/tiny-canvas';
type Options = {
    container?: HTMLElement;
    limitHeight?: number;
    canvasCache?: Array<HTMLCanvasElement>;
    canvasCount?: number;
};
type CallbackOptions = DOMRect & {
    context: CanvasRenderingContext2D | null;
};
declare class TinyCanvas implements TinyCanvasInterface {
    private options;
    private width;
    private height;
    constructor(options: Options);
    private removeCanvas;
    private getCanvas;
    resize(width: number, height: number): void;
    private handleSingleRect;
    handleFillRect(options: CallbackOptions & DrawStyle): void;
    drawRect(options: DrawOptions): void;
    private handleRect;
    getImageData(options: DOMRect): ImageData | undefined;
    handleClear: (opts: CallbackOptions) => void;
    clearRect(options: DOMRect): void;
    clear(): void;
    destroy(): void;
}
export default TinyCanvas;
