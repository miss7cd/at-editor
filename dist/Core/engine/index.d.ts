import { Selector, NodeInterface } from '../../types/node';
import { ChangeInterface } from '../../types/change';
import { EngineInterface, EngineOptions } from '../../types/engine';
import { HistoryInterface } from '../../types/history';
import { HotkeyInterface } from '../../types/hotkey';
import { CardInterface } from '../../types/card';
import { TypingInterface } from '../../types';
import Editor from '../editor';
import { Model, Element } from '../model';
import './index.css';
declare class Engine<T extends EngineOptions = EngineOptions> extends Editor<T> implements EngineInterface<T> {
    private _readonly;
    private _container;
    readonly kind = "engine";
    typing: TypingInterface;
    model: Model;
    change: ChangeInterface;
    history: HistoryInterface;
    hotkey: HotkeyInterface;
    get readonly(): boolean;
    set readonly(readonly: boolean);
    constructor(selector: Selector, options?: EngineOptions);
    isFocus(): boolean;
    isEmpty(): boolean;
    focus(toStart?: boolean): void;
    blur(): void;
    /**
     * @deprecated 请使用 model.toValue 性能更好
     */
    getValue(ignoreCursor?: boolean): string;
    /**
     * @deprecated 请使用 model.toValueAsync 性能更好
     * @param ignoreCursor
     * @param callback
     * @returns
     */
    getValueAsync(ignoreCursor?: boolean, callback?: (name: string, card?: CardInterface, ...args: any) => boolean | number | void): Promise<string>;
    /**
     * @deprecated 请使用 model.toHTML 性能更好
     */
    getHtml(): string;
    initDocOnReadonly(): void;
    setValue(value: string, callback?: (count: number) => void): this;
    setHtml(html: string, callback?: (count: number) => void): this;
    setMarkdown(text: string, callback?: (count: number) => void): this;
    setJsonValue(value: Element, callback?: (count: number) => void): this;
    getJsonValue(): Element;
    /**
     * @deprecated 请使用 model.toText 性能更好
     */
    getText(includeCard?: boolean): string;
    normalize(container?: NodeInterface): void;
    showPlaceholder(): void;
    hidePlaceholder(): void;
    destroy(): void;
}
export default Engine;
