import { EngineInterface, NodeInterface, Selector } from '../../types';
export type Options = {
    engine: EngineInterface;
    lang?: string;
    tabIndex?: number;
    className?: string | Array<string>;
    placeholder?: string;
    autoPrepend?: boolean;
    autoAppend?: boolean;
};
export declare const DATA_PLACEHOLDER = "data-placeholder";
export declare const DATA_PLACEHOLDER_CLASS = "am-engine-placeholder";
declare class Container {
    private options;
    private node;
    private _focused;
    constructor(selector: Selector, options: Options);
    _init(): void;
    init(): void;
    _setFocus: () => void;
    _setBlur: () => void;
    handleClick: (event: MouseEvent) => void;
    handleFocus: () => void;
    private focusTimeout;
    triggerFoucs: () => void;
    onInput: (e: InputEvent) => void;
    onRealtimeChange: () => void;
    private blurTimeout;
    docMouseDown: (e: MouseEvent) => void;
    isFocus(): boolean;
    getNode(): NodeInterface;
    setReadonly(readonly: boolean): void;
    showPlaceholder(): void;
    hidePlaceholder(): void;
    destroy(): void;
}
export default Container;
