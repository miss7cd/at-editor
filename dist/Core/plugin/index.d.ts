import { EditorInterface } from '../../types/editor';
import { ElementPluginInterface, PluginEntry, PluginInterface, PluginModelInterface, PluginOptions } from '../../types/plugin';
import Plugin from './base';
import ElementPlugin from './element';
import BlockPlugin, { isBlockPlugin } from './block';
import InlinePlugin, { isInlinePlugin } from './inline';
import ListPlugin from './list';
import MarkPlugin, { isMarkPlugin } from './mark';
import { BlockInterface } from '../../types/block';
import { InlineInterface } from '../../types/inline';
import { MarkInterface } from '../../types/mark';
declare class PluginModel implements PluginModelInterface {
    protected data: Record<string, PluginEntry>;
    components: Record<string, PluginInterface<PluginOptions>>;
    protected editor: EditorInterface;
    constructor(editor: EditorInterface);
    init(plugins: Array<PluginEntry>, config: {
        [k: string]: PluginOptions;
    }): void;
    add(clazz: PluginEntry, options?: PluginOptions): void;
    findPlugin<T extends PluginOptions = PluginOptions>(pluginName: string): PluginInterface<T> | undefined;
    findElementPlugin<T extends PluginOptions = PluginOptions>(pluginName: string): ElementPluginInterface<T> | undefined;
    findMarkPlugin<T extends PluginOptions = PluginOptions>(pluginName: string): MarkInterface<T> | undefined;
    findInlinePlugin<T extends PluginOptions = PluginOptions>(pluginName: string): InlineInterface<T> | undefined;
    findBlockPlugin<T extends PluginOptions = PluginOptions>(pluginName: string): BlockInterface<T> | undefined;
    each(callback: (name: string, clazz: PluginEntry, index?: number) => boolean | void): void;
    destroy(): void;
}
export default PluginModel;
export { Plugin, ElementPlugin, MarkPlugin, InlinePlugin, BlockPlugin, ListPlugin, isBlockPlugin, isInlinePlugin, isMarkPlugin };
