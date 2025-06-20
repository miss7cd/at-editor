import { EditorInterface, ClipboardInterface } from '../types';
import { RangeInterface } from '../types/range';
export declare const isDragEvent: (event: DragEvent | ClipboardEvent) => event is DragEvent;
export default class Clipboard implements ClipboardInterface {
    private readonly editor;
    constructor(editor: EditorInterface);
    getData(event: DragEvent | ClipboardEvent): {
        html: string | undefined;
        text: string | undefined;
        files: File[];
    };
    write(event: ClipboardEvent, range?: RangeInterface): Record<"html" | "text", string> | undefined;
    copy(data: Node | string, trigger?: boolean): boolean;
    cut(): void;
}
