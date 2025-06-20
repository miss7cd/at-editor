import { NodeInterface } from '../../types/node';
import { EditorInterface } from '../../types/editor';
import { SchemaInterface, ParserInterface, Callbacks, ConversionInterface } from '../../types';
import TextParser from './text';
declare class Parser implements ParserInterface {
    root: NodeInterface;
    private editor;
    /**
     * 对节点进行正常化转换，在解析编辑器值的时候设置为false可以提升性能。设置为ture的时候可以对不确定的html进行转换，例如粘贴的时候
     */
    private isNormalize;
    constructor(source: string | Node | NodeInterface, editor: EditorInterface, paserBefore?: (node: NodeInterface) => void, isNormalize?: boolean);
    convert(conversion: ConversionInterface, node: NodeInterface, schema?: SchemaInterface): NodeInterface | null;
    normalize(root: NodeInterface, schema: SchemaInterface, conversion: ConversionInterface | null): void;
    traverse(node: NodeInterface, schema: (SchemaInterface | null) | undefined, conversion: ConversionInterface | null, callbacks: Callbacks, includeCard?: boolean): void;
    /**
     * 遍历 DOM 树，生成符合标准的 XML 代码
     * @param schema 标签保留规则
     * @param conversion 标签转换规则
     * @param replaceSpaces 是否替换空格
     * @param customTags 是否将光标、卡片节点转换为标准代码
     */
    toValue(schema?: SchemaInterface | null, conversion?: ConversionInterface | null, replaceSpaces?: boolean, customTags?: boolean): string;
    /**
     * 转换为HTML代码
     * @param inner 内包裹节点
     * @param outter 外包裹节点
     */
    toHTML(inner?: Node, outter?: Node): string;
    /**
     * 返回DOM树
     */
    toDOM(schema: (SchemaInterface | null) | undefined, conversion: ConversionInterface | null): DocumentFragment;
    /**
     * 转换为文本
     * @param schema Schema 规则
     * @param includeCard 是否遍历卡片内部
     * @param formatOL 是否格式化有序列表，<ol><li>a</li><li>b</li></ol>  ->  1. a  2. b
     */
    toText(schema?: SchemaInterface | null, includeCard?: boolean, formatOL?: boolean): string;
}
export default Parser;
export { TextParser };
