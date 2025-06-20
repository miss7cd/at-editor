import ElementPluginEntry from './element';
import type { InlineInterface, PluginInterface, PluginOptions } from '../../types';
declare abstract class InlineEntry<T extends PluginOptions = PluginOptions> extends ElementPluginEntry<T> implements InlineInterface<T> {
    readonly kind: string;
    /**
     * 标签名称
     */
    abstract readonly tagName: string;
    /**
     * Markdown 规则，可选
     */
    readonly markdown?: string;
    execute(...args: any): void;
    queryState(): boolean | string[] | undefined;
    /**
     * 是否触发执行增加当前inline标签包裹，否则将移除当前inline标签的包裹
     * @param args 在调用 command.execute 执行插件传入时的参数
     */
    isTrigger?(...args: any): boolean;
}
export default InlineEntry;
export declare const isInlinePlugin: (plugin: PluginInterface) => plugin is InlineInterface;
