import { NodeInterface, Selector, EventListener } from './node';
import { ChangeInterface } from './change';
import { SchemaInterface } from './schema';
import { HistoryInterface } from './history';
import { CardInterface } from './card';
import { ClipboardData } from './clipboard';
import { TypingInterface } from './typing';
import { RangeInterface } from './range';
import { EditorInterface, EditorOptions } from './editor';
import { HotkeyInterface } from './hotkey';
import { Model, Operation, Element, Node } from '../model';
export interface ContainerInterface {
    init(): void;
    isFocus(): boolean;
    getNode(): NodeInterface;
    setReadonly(readonly: boolean): void;
    showPlaceholder(): void;
    hidePlaceholder(): void;
    destroy(): void;
}
export interface EngineOptions extends EditorOptions {
    className?: string;
    tabIndex?: number;
    placeholder?: string;
    readonly?: boolean;
    autoPrepend?: boolean;
    autoAppend?: boolean;
    markdown?: {
        mode?: 'confirm' | false;
        check?: (text: string, html: string) => Promise<string | false>;
    };
}
export interface Engine<T extends EngineOptions = EngineOptions> {
    new (selector: Selector, options?: T): EngineInterface<T>;
}
export interface EngineInterface<T extends EngineOptions = EngineOptions> extends EditorInterface<T> {
    options: T;
    readonly: boolean;
    change: ChangeInterface;
    typing: TypingInterface;
    model: Model;
    history: HistoryInterface;
    hotkey: HotkeyInterface;
    focus(toStart?: boolean): void;
    blur(): void;
    isFocus(): boolean;
    isEmpty(): boolean;
    getValue(ignoreCursor?: boolean): string;
    getValueAsync(ignoreCursor?: boolean, callback?: (name: string, card?: CardInterface, ...args: any) => boolean | number | void): Promise<string>;
    /**
     // 获取编辑器的html
     // @deprecated 请使用 model.toHTML 性能更好
     */
    getHtml(): string;
    setValue(value: string, callback?: (count: number) => void): EngineInterface;
    setHtml(html: string, callback?: (count: number) => void): EngineInterface;
    setMarkdown(text: string, callback?: (count: number) => void): EngineInterface;
    setJsonValue(value: Element, callback?: (count: number) => void): EngineInterface;
    getJsonValue(): Element;
    getText(includeCard?: boolean): string;
    /**
     // 展示 placeholder
     */
    showPlaceholder(): void;
    /**
     // 隐藏 placeholder
     */
    hidePlaceholder(): void;
    /**
     // 保证所有行内元素都在段落内
     */
    normalize(container?: NodeInterface): void;
    /**
     // 绑定事件
     */
    on<R = any, F extends EventListener<R> = EventListener<R>>(eventType: string, listener: F, options?: boolean | AddEventListenerOptions): void;
    /**
     // 全选ctrl+a键按下，返回false，终止处理其它监听
     */
    on(eventType: 'keydown:all', listener: (event: KeyboardEvent) => boolean | void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 卡片最小化时触发
     */
    on(eventType: 'card:minimize', listener: (card: CardInterface) => void, options?: boolean | AddEventListenerOptions): void;
    on(eventType: 'card:maximize', listener: (card: CardInterface) => void, options?: boolean | AddEventListenerOptions): void;
    on(eventType: 'parse:value-before', listener: (root: NodeInterface) => void, options?: boolean | AddEventListenerOptions): void;
    on(eventType: 'parse:value', listener: (node: NodeInterface, attributes: {
        [key: string]: string;
    }, styles: {
        [key: string]: string;
    }, value: Array<string>) => boolean | void, options?: boolean | AddEventListenerOptions): void;
    on(eventType: 'parse:node', listener: (node: Node) => false | void, options?: boolean | AddEventListenerOptions): void;
    on(eventType: 'parse:text', listener: (node: NodeInterface, attributes: {
        [key: string]: string;
    }, styles: {
        [key: string]: string;
    }, value: Array<string>) => boolean | void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 解析DOM节点，生成符合标准的 XML。生成xml代码结束后触发
     */
    on(eventType: 'parse:value-after', listener: (value: Array<string>) => void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 转换为HTML代码之前触发
     */
    on(eventType: 'parse:html-before', listener: (root: NodeInterface) => void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 转换为HTML代码
     */
    on(eventType: 'parse:html', listener: (root: NodeInterface) => void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 转换为HTML代码之后触发
     */
    on(eventType: 'parse:html-after', listener: (root: NodeInterface) => void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 当粘贴到编辑器事件发生时触发，返回false，将不在处理粘贴
     */
    on(eventType: 'paste:event', listener: (data: ClipboardData & {
        isPasteText: boolean;
    }, source: string) => boolean | void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 设置本次粘贴所需保留标签的白名单，以及属性
     */
    on(eventType: 'paste:schema', listener: (schema: SchemaInterface) => void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 解析粘贴数据，还未生成符合编辑器数据的片段之前触发
     */
    on(eventType: 'paste:origin', listener: (root: NodeInterface) => void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 解析粘贴数据，生成符合编辑器数据的片段之后扁平化阶段触发
     */
    on(eventType: 'paste:each', listener: (root: NodeInterface) => void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 解析粘贴数据，生成符合编辑器数据的片段之后扁平化阶段触发
     */
    on(eventType: 'paste:each-after', listener: (root: NodeInterface) => void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 生成粘贴数据DOM片段后，还未写入到编辑器之前触发
     */
    on(eventType: 'paste:before', listener: (fragment: DocumentFragment) => void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 插入当前粘贴的片段后触发，此时还未渲染卡片
     */
    on(eventType: 'paste:insert', listener: (range: RangeInterface) => void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 粘贴完成后触发
     */
    on(eventType: 'paste:after', listener: () => void, options?: boolean): void;
    /**
     // 复制DOM节点时触发
     */
    on(eventType: 'copy', listener: (root: NodeInterface) => void, options?: boolean | AddEventListenerOptions): void;
    /**
     // DOM改变触发
     */
    on(eventType: 'ops', listener: (ops: Operation[]) => void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 移除绑定事件
     */
    off(eventType: string, listener: EventListener): void;
    /**
     // 全选ctrl+a键按下，返回false，终止处理其它监听
     */
    off(eventType: 'keydown:all', listener: (event: KeyboardEvent) => boolean | void): void;
    /**
     // 卡片最小化时触发
     */
    off(eventType: 'card:minimize', listener: (card: CardInterface) => void): void;
    /**
     // 卡片最大化时触发
     */
    off(eventType: 'card:maximize', listener: (card: CardInterface) => void): void;
    /**
     // 解析DOM节点，生成符合标准的 XML 代码之前触发
     */
    off(eventType: 'parse:value-before', listener: (root: NodeInterface) => void): void;
    /**
     // 解析DOM节点，生成符合标准的 XML，遍历子节点时触发。返回false跳过当前节点
     */
    off(eventType: 'parse:value', listener: (node: NodeInterface, attributes: {
        [key: string]: string;
    }, styles: {
        [key: string]: string;
    }, value: Array<string>) => boolean | void): void;
    /**
     // 解析 model node 时触发
     */
    off(eventType: 'parse:node', listener: (node: Node) => false | void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 解析DOM节点，生成文本，遍历子节点时触发。返回false跳过当前节点
     */
    off(eventType: 'parse:text', listener: (node: NodeInterface, attributes: {
        [key: string]: string;
    }, styles: {
        [key: string]: string;
    }, value: Array<string>) => boolean | void): void;
    /**
     // 解析DOM节点，生成符合标准的 XML。生成xml代码结束后触发
     */
    off(eventType: 'parse:value-after', listener: (value: Array<string>) => void): void;
    /**
     // 转换为HTML代码之前触发
     */
    off(eventType: 'parse:html-before', listener: (root: NodeInterface) => void): void;
    /**
     // 转换为HTML代码
     */
    off(eventType: 'parse:html', listener: (root: NodeInterface) => void): void;
    /**
     // 转换为HTML代码之后触发
     */
    off(eventType: 'parse:html-after', listener: (root: NodeInterface) => void): void;
    /**
     // 当粘贴到编辑器事件发生时触发，返回false，将不在处理粘贴
     */
    off(eventType: 'paste:event', listener: (data: ClipboardData & {
        isPasteText: boolean;
    }, source: string) => boolean | void): void;
    /**
     // 设置本次粘贴所需保留标签的白名单，以及属性
     */
    off(eventType: 'paste:schema', listener: (schema: SchemaInterface) => void): void;
    /**
     // 解析粘贴数据，还未生成符合编辑器数据的片段之前触发
     */
    off(eventType: 'paste:origin', listener: (root: NodeInterface) => void): void;
    /**
     // 解析粘贴数据，生成符合编辑器数据的片段之后扁平化阶段触发
     */
    off(eventType: 'paste:each', listener: (root: NodeInterface) => void): void;
    /**
     // 解析粘贴数据，生成符合编辑器数据的片段之后扁平化阶段触发
     */
    off(eventType: 'paste:each-after', listener: (root: NodeInterface) => void): void;
    /**
     // 生成粘贴数据DOM片段后，还未写入到编辑器之前触发
     */
    off(eventType: 'paste:before', listener: (fragment: DocumentFragment) => void): void;
    /**
     // 插入当前粘贴的片段后触发，此时还未渲染卡片
     */
    off(eventType: 'paste:insert', listener: (range: RangeInterface) => void): void;
    /**
     // 粘贴完成后触发
     */
    off(eventType: 'paste:after', listener: () => void): void;
    /**
     // 复制DOM节点时触发
     */
    off(eventType: 'copy', listener: (root: NodeInterface) => void): void;
    /**
     // DOM改变触发
     */
    off(eventType: 'ops', listener: (ops: Operation[]) => void): void;
    /**
     // 回车键按下，返回false，终止处理其它监听
     */
    on(eventType: 'keydown:enter', listener: (event: KeyboardEvent) => boolean | void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 删除键按下，返回false，终止处理其它监听
     */
    on(eventType: 'keydown:backspace', listener: (event: KeyboardEvent) => boolean | void, options?: boolean | AddEventListenerOptions): void;
    /**
     // Tab键按下，返回false，终止处理其它监听
     */
    on(eventType: 'keydown:tab', listener: (event: KeyboardEvent) => boolean | void, options?: boolean | AddEventListenerOptions): void;
    /**
     // Shift-Tab键按下，返回false，终止处理其它监听
     */
    on(eventType: 'keydown:shift-tab', listener: (event: KeyboardEvent) => boolean | void, options?: boolean | AddEventListenerOptions): void;
    /**
     // @ 符合键按下，返回false，终止处理其它监听
     */
    on(eventType: 'keydown:at', listener: (event: KeyboardEvent) => boolean | void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 空格键按下，返回false，终止处理其它监听
     */
    on(eventType: 'keydown:space', listener: (event: KeyboardEvent) => boolean | void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 反斜杠键按下，唤出Toolbar，返回false，终止处理其它监听
     */
    on(eventType: 'keydown:slash', listener: (event: KeyboardEvent) => boolean | void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 左方向键按下，返回false，终止处理其它监听
     */
    on(eventType: 'keydown:left', listener: (event: KeyboardEvent) => boolean | void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 右方向键按下，返回false，终止处理其它监听
     */
    on(eventType: 'keydown:right', listener: (event: KeyboardEvent) => boolean | void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 上方向键按下，返回false，终止处理其它监听
     */
    on(eventType: 'keydown:up', listener: (event: KeyboardEvent) => boolean | void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 下方向键按下，返回false，终止处理其它监听
     */
    on(eventType: 'keydown:down', listener: (event: KeyboardEvent) => boolean | void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 回车键按下弹起，返回false，终止处理其它监听
     */
    on(eventType: 'keyup:enter', listener: (event: KeyboardEvent) => boolean | void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 删除键按下弹起，返回false，终止处理其它监听
     */
    on(eventType: 'keyup:backspace', listener: (event: KeyboardEvent) => boolean | void, options?: boolean | AddEventListenerOptions): void;
    /**
     // Tab键按下弹起，返回false，终止处理其它监听
     */
    on(eventType: 'keyup:tab', listener: (event: KeyboardEvent) => boolean | void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 空格键按下弹起，返回false，终止处理其它监听
     */
    on(eventType: 'keyup:space', listener: (event: KeyboardEvent) => boolean | void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 编辑器光标选择变化时触发
     */
    on(eventType: 'select', listener: () => void, options?: boolean): void;
    /**
     // 编辑器值变化时触发
     */
    on(eventType: 'change', listener: (value: string, trigger: 'remote' | 'local' | 'both') => void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 编辑器值有变化时就触发，与 change 相比，change 需要在组合输入法完成输入后才会触发，在一定时间内如果内容没有改版也不会触发 change
     */
    on(eventType: 'realtimeChange', listener: (trigger: 'remote' | 'local') => void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 设置编辑器值之前
     */
    on(eventType: 'beforeSetValue', listener: (value: string) => void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 设置编辑器值之后
     */
    on(eventType: 'afterSetValue', listener: () => void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 编辑器聚焦
     */
    on(eventType: 'focus', listener: () => void, options?: boolean): void;
    /**
     // 编辑器失去焦点
     */
    on(eventType: 'blur', listener: () => void, options?: boolean): void;
    /**
     // 编辑器只读切换时
     */
    on(eventType: 'readonly', listener: (readonly: boolean) => void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 执行命令之前
     */
    on(eventType: 'beforeCommandExecute', listener: (name: string, ...args: any) => void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 执行命令之后
     */
    on(eventType: 'afterCommandExecute', listener: (name: string, ...args: any) => void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 拖动文件到编辑器时触发
     */
    on(eventType: 'drop:files', listener: (files: Array<File>) => void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 历史撤销
     */
    on(eventType: 'undo', listener: () => boolean | void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 历史重做
     */
    on(eventType: 'redo', listener: () => boolean | void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 回车键按下，返回false，终止处理其它监听
     */
    off(eventType: 'keydown:enter', listener: (event: KeyboardEvent) => boolean | void): void;
    /**
     // 删除键按下，返回false，终止处理其它监听
     */
    off(eventType: 'keydown:backspace', listener: (event: KeyboardEvent) => boolean | void): void;
    /**
     // Tab键按下，返回false，终止处理其它监听
     */
    off(eventType: 'keydown:tab', listener: (event: KeyboardEvent) => boolean | void): void;
    /**
     // Shift-Tab键按下，返回false，终止处理其它监听
     */
    off(eventType: 'keydown:shift-tab', listener: (event: KeyboardEvent) => boolean | void): void;
    /**
     // @ 符合键按下，返回false，终止处理其它监听
     */
    off(eventType: 'keydown:at', listener: (event: KeyboardEvent) => boolean | void): void;
    /**
     // 空格键按下，返回false，终止处理其它监听
     */
    off(eventType: 'keydown:space', listener: (event: KeyboardEvent) => boolean | void): void;
    /**
     // 反斜杠键按下，唤出Toolbar，返回false，终止处理其它监听
     */
    off(eventType: 'keydown:slash', listener: (event: KeyboardEvent) => boolean | void): void;
    /**
     // 左方向键按下，返回false，终止处理其它监听
     */
    off(eventType: 'keydown:left', listener: (event: KeyboardEvent) => boolean | void): void;
    /**
     // 右方向键按下，返回false，终止处理其它监听
     */
    off(eventType: 'keydown:right', listener: (event: KeyboardEvent) => boolean | void): void;
    /**
     // 上方向键按下，返回false，终止处理其它监听
     */
    off(eventType: 'keydown:up', listener: (event: KeyboardEvent) => boolean | void): void;
    /**
     // 下方向键按下，返回false，终止处理其它监听
     */
    off(eventType: 'keydown:down', listener: (event: KeyboardEvent) => boolean | void): void;
    /**
     // 回车键按下弹起，返回false，终止处理其它监听
     */
    off(eventType: 'keyup:enter', listener: (event: KeyboardEvent) => boolean | void): void;
    /**
     // 删除键按下弹起，返回false，终止处理其它监听
     */
    off(eventType: 'keyup:backspace', listener: (event: KeyboardEvent) => boolean | void): void;
    /**
     // Tab键按下弹起，返回false，终止处理其它监听
     */
    off(eventType: 'keyup:tab', listener: (event: KeyboardEvent) => boolean | void): void;
    /**
     // 空格键按下弹起，返回false，终止处理其它监听
     */
    off(eventType: 'keyup:space', listener: (event: KeyboardEvent) => boolean | void): void;
    /**
     // 编辑器光标选择变化时触发
     */
    off(eventType: 'select', listener: () => void): void;
    /**
     // 编辑器值变化时触发
     */
    off(eventType: 'change', listener: (value: string, trigger: 'remote' | 'local' | 'both') => void): void;
    /**
     // 编辑器值有变化时就触发，与 change 相比，change 需要在组合输入法完成输入后才会触发，在一定时间内如果内容没有改版也不会触发 change
     */
    off(eventType: 'realtimeChange', listener: (trigger: 'remote' | 'local') => void): void;
    /**
     // 设置编辑器值之前
     */
    off(eventType: 'beforeSetValue', listener: (value: string) => void): void;
    /**
     // 设置编辑器值之后
     */
    off(eventType: 'afterSetValue', listener: () => void): void;
    /**
     // 编辑器聚焦
     */
    off(eventType: 'focus', listener: () => void): void;
    /**
     // 编辑器失去焦点
     */
    off(eventType: 'blur', listener: () => void): void;
    /**
     // 编辑器只读切换时
     */
    off(eventType: 'readonly', listener: (readonly: boolean) => void): void;
    /**
     // 执行命令之前
     */
    off(eventType: 'beforeCommandExecute', listener: (name: string, ...args: any) => void): void;
    /**
     // 执行命令之后
     */
    off(eventType: 'afterCommandExecute', listener: (name: string, ...args: any) => void): void;
    /**
     // 拖动文件到编辑器时触发
     */
    off(eventType: 'drop:files', listener: (files: Array<File>) => void): void;
    /**
     // 历史撤销
     */
    off(eventType: 'undo', listener: () => boolean | void): void;
    /**
     // 历史重做
     */
    off(eventType: 'redo', listener: () => boolean | void): void;
    /**
     // 触发事件
     */
    trigger<R = any>(eventType: string, ...args: any): R;
    /**
     // 全选ctrl+a键按下，返回false，终止处理其它监听
     */
    trigger(eventType: 'keydown:all', event: KeyboardEvent): boolean | void;
    /**
     // 卡片最小化时触发
     */
    trigger(eventType: 'card:minimize', card: CardInterface): void;
    /**
     // 卡片最大化时触发
     */
    trigger(eventType: 'card:maximize', card: CardInterface): void;
    /**
     // 解析DOM节点，生成符合标准的 XML 代码之前触发
     */
    trigger(eventType: 'parse:value-before', root: NodeInterface): void;
    /**
     // 解析DOM节点，生成符合标准的 XML，遍历子节点时触发。返回false跳过当前节点
     */
    trigger(eventType: 'parse:value', node: NodeInterface, attributes: {
        [key: string]: string;
    }, styles: {
        [key: string]: string;
    }, value: Array<string>): boolean | void;
    /**
     // 解析 model node 时触发
     */
    trigger(eventType: 'parse:node', listener: (node: Node) => false | void, options?: boolean | AddEventListenerOptions): void;
    /**
     // 解析DOM节点，生成文本，遍历子节点时触发。返回false跳过当前节点
     */
    trigger(eventType: 'parse:text', node: NodeInterface, attributes: {
        [key: string]: string;
    }, styles: {
        [key: string]: string;
    }, value: Array<string>): boolean | void;
    /**
     // 解析DOM节点，生成符合标准的 XML。生成xml代码结束后触发
     */
    trigger(eventType: 'parse:value-after', value: Array<string>): void;
    /**
     // 转换为HTML代码之前触发
     */
    trigger(eventType: 'parse:html-before', root: NodeInterface): void;
    /**
     // 转换为HTML代码
     */
    trigger(eventType: 'parse:html', root: NodeInterface): void;
    /**
     // 转换为HTML代码之后触发
     */
    trigger(eventType: 'parse:html-after', root: NodeInterface): void;
    /**
     // 当粘贴到编辑器事件发生时触发，返回false，将不在处理粘贴
     */
    trigger(eventType: 'paste:event', data: ClipboardData & {
        isPasteText: boolean;
    }, source: string): boolean | void;
    /**
     // 设置本次粘贴所需保留标签的白名单，以及属性
     */
    trigger(eventType: 'paste:schema', schema: SchemaInterface): void;
    /**
     // 解析粘贴数据，还未生成符合编辑器数据的片段之前触发
     */
    trigger(eventType: 'paste:origin', root: NodeInterface): void;
    /**
     // 解析粘贴数据，生成符合编辑器数据的片段之后扁平化阶段触发
     */
    trigger(eventType: 'paste:each', root: NodeInterface): void;
    /**
     // 解析粘贴数据，生成符合编辑器数据的片段之后扁平化阶段触发
     */
    trigger(eventType: 'paste:each-after', root: NodeInterface): void;
    /**
     // 生成粘贴数据DOM片段后，还未写入到编辑器之前触发
     */
    trigger(eventType: 'paste:before', fragment: DocumentFragment): void;
    /**
     // 插入当前粘贴的片段后触发，此时还未渲染卡片
     */
    trigger(eventType: 'paste:insert', range: RangeInterface): void;
    /**
     // 粘贴完成后触发
     */
    trigger(eventType: 'paste:after'): void;
    /**
     // 复制DOM节点时触发
     */
    trigger(eventType: 'copy', root: NodeInterface): void;
    /**
     // DOM改变触发
     */
    trigger(eventType: 'ops', ops: Operation[]): void;
    /**
     // 回车键按下，返回false，终止处理其它监听
     */
    trigger(eventType: 'keydown:enter', event: KeyboardEvent): boolean | void;
    trigger(eventType: 'keydown:backspace', event: KeyboardEvent): boolean | void;
    trigger(eventType: 'keydown:tab', event: KeyboardEvent): boolean | void;
    trigger(eventType: 'keydown:shift-tab', event: KeyboardEvent): boolean | void;
    /**
     // @ 符合键按下，返回false，终止处理其它监听
     */
    trigger(eventType: 'keydown:at', event: KeyboardEvent): boolean | void;
    /**
     // 空格键按下，返回false，终止处理其它监听
     */
    trigger(eventType: 'keydown:space', event: KeyboardEvent): boolean | void;
    /**
     // 反斜杠键按下，唤出Toolbar，返回false，终止处理其它监听
     */
    trigger(eventType: 'keydown:slash', event: KeyboardEvent): boolean | void;
    /**
     // 左方向键按下，返回false，终止处理其它监听
     */
    trigger(eventType: 'keydown:left', event: KeyboardEvent): boolean | void;
    /**
     // 右方向键按下，返回false，终止处理其它监听
     */
    trigger(eventType: 'keydown:right', event: KeyboardEvent): boolean | void;
    /**
     // 上方向键按下，返回false，终止处理其它监听
     */
    trigger(eventType: 'keydown:up', event: KeyboardEvent): boolean | void;
    /**
     // 下方向键按下，返回false，终止处理其它监听
     */
    trigger(eventType: 'keydown:down', event: KeyboardEvent): boolean | void;
    /**
     // 回车键按下弹起，返回false，终止处理其它监听
     */
    trigger(eventType: 'keyup:enter', event: KeyboardEvent): boolean | void;
    /**
     // 删除键按下弹起，返回false，终止处理其它监听
     */
    trigger(eventType: 'keyup:backspace', event: KeyboardEvent): boolean | void;
    /**
     // Tab键按下弹起，返回false，终止处理其它监听
     */
    trigger(eventType: 'keyup:tab', event: KeyboardEvent): boolean | void;
    /**
     // 空格键按下弹起，返回false，终止处理其它监听
     */
    trigger(eventType: 'keyup:space', event: KeyboardEvent): boolean | void;
    /**
     // 编辑器光标选择变化时触发
     */
    trigger(eventType: 'select'): void;
    /**
     // 编辑器值变化时触发
     */
    trigger(eventType: 'change', value: string, trigger: 'remote' | 'local' | 'both'): void;
    /**
     // 编辑器值有变化时就触发，与 change 相比，change 需要在组合输入法完成输入后才会触发，在一定时间内如果内容没有改版也不会触发 change
     */
    trigger(eventType: 'realtimeChange', trigger: 'remote' | 'local' | 'both'): void;
    /**
     // 设置编辑器值之前
     */
    trigger(eventType: 'beforeSetValue', value: string): void;
    /**
     // 设置编辑器值之后
     */
    trigger(eventType: 'afterSetValue'): void;
    /**
     // 编辑器聚焦
     */
    trigger(eventType: 'focus'): void;
    /**
     // 编辑器失去焦点
     */
    trigger(eventType: 'blur'): void;
    /**
     // 编辑器只读切换时
     */
    trigger(eventType: 'readonly', readonly: boolean): void;
    /**
     // 执行命令之前
     */
    trigger(eventType: 'beforeCommandExecute', name: string, ...args: any): void;
    /**
     // 执行命令之后
     */
    trigger(eventType: 'afterCommandExecute', name: string, ...args: any): void;
    /**
     // 拖动文件到编辑器时触发
     */
    trigger(eventType: 'drop:files', files: Array<File>): void;
    /**
     // 历史撤销
     */
    trigger(eventType: 'undo'): void;
    /**
     // 历史重做
     */
    trigger(eventType: 'redo'): void;
    /**
     // 销毁
     */
    destroy(): void;
}
