import ElementPluginEntry from './element';
import type { SchemaBlock, BlockInterface, PluginInterface, PluginOptions } from '../../types';
declare abstract class BlockEntry<T extends PluginOptions = PluginOptions> extends ElementPluginEntry<T> implements BlockInterface<T> {
    readonly kind: string;
    /**
     * 标签名称
     */
    abstract readonly tagName: string | Array<string>;
    /**
     * 该节点允许可以放入的block节点
     */
    readonly allowIn?: Array<string>;
    /**
     * 禁用的mark插件样式
     */
    readonly disableMark?: Array<string>;
    /**
     * 是否能够合并
     */
    readonly canMerge?: boolean;
    schema(): SchemaBlock | Array<SchemaBlock>;
}
export default BlockEntry;
export declare const isBlockPlugin: (plugin: PluginInterface) => plugin is BlockInterface;
