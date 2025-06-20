import type { PluginOptions, ElementPluginInterface, NodeInterface, ConversionData, PluginInterface } from '../../types';
import type { SchemaGlobal, SchemaRule, SchemaValue } from '../../types/schema';
import PluginEntry from './base';
declare abstract class ElementPluginEntry<T extends PluginOptions = PluginOptions> extends PluginEntry<T> implements ElementPluginInterface<T> {
    readonly kind: string;
    /**
     * 规则缓存
     */
    private sechamCache?;
    /**
     * 标签名称，没有标签名称，style 和 attributes 将以全局属性方式添加
     */
    readonly tagName?: string | Array<string>;
    /**
     * 标签样式，可选
     * 使用变量表示值时，固定规则：@var0 @var1 @var2 ... 分别表示执行 command.execute 时传入的 参数1 参数2 参数3 ...
     * { value:string,format:(value:string) => string } 可以在获取节点属性值时，对值进行自定义格式化处理
     */
    readonly style?: {
        [key: string]: string | {
            value: string;
            format: (value: string) => string;
        };
    };
    /**
     * 标签属性，可选
     * 使用变量表示值时，固定规则：@var0 @var1 @var2 ... 分别表示执行 command.execute 时传入的 参数1 参数2 参数3 ...
     * { value:string,format:(value:string) => string } 可以在获取节点属性值时，对值进行自定义格式化处理
     */
    readonly attributes?: {
        [key: string]: string | {
            value: string;
            format: (value: string) => string;
        };
    };
    /**
     * 在 style 或者 attributes 使用变量表示的值规则
     * key 为如上所诉的变量名称 @var0 @var1 @var2 ...
     */
    readonly variable?: {
        [key: string]: SchemaValue;
    };
    /**
     * 初始化
     */
    init(): void;
    /**
     * 将当前插件style属性应用到节点
     * @param node 节点
     * @param args style 对应 variable 中的变量参数
     */
    setStyle(node: NodeInterface | Node, ...args: Array<any>): void;
    /**
     * 将当前插件attributes属性应用到节点
     * @param node 节点
     * @param args attributes 对应 variable 中的变量参数
     */
    setAttributes(node: NodeInterface | Node, ...args: Array<any>): void;
    /**
     * 获取节点符合当前插件规则的样式
     * @param node 节点
     * @returns 样式名称和样式值键值对
     */
    getStyle(node: NodeInterface | Node): {
        [k: string]: string;
    };
    /**
     * 获取节点符合当前插件规则的属性
     * @param node 节点
     * @returns 属性名称和属性值键值对
     */
    getAttributes(node: NodeInterface | Node): {
        [k: string]: string;
    };
    /**
     * 检测当前节点是否符合当前插件设置的规则
     * @param node 节点
     * @returns true | false
     */
    isSelf(node: NodeInterface | Node): boolean;
    /**
     * 获取插件设置的属性和样式所生成的规则
     */
    schema(): SchemaRule | SchemaGlobal | Array<SchemaRule>;
    /**
     * 在粘贴时的标签转换，例如：b > strong
     */
    conversion?(): ConversionData;
    /**
     * 创建符合当前插件规则的节点
     * @param args 参数
     * @returns 节点
     */
    createElement(...args: any): NodeInterface;
}
export default ElementPluginEntry;
export declare const isElementPlugin: (plugin: PluginInterface) => plugin is ElementPluginInterface;
