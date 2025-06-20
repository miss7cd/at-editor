import { NodeInterface, SchemaAttributes, SchemaGlobal, SchemaInterface, SchemaRule, SchemaStyle, SchemaValue, SchemaValueObject } from '../types';
declare class Schema implements SchemaInterface {
    private _all;
    private _typeMap;
    private _invalidKeys;
    private _tagMap;
    data: {
        blocks: Array<SchemaRule>;
        inlines: Array<SchemaRule>;
        marks: Array<SchemaRule>;
        globals: {
            [key: string]: SchemaAttributes | SchemaStyle;
        };
    };
    /**
     * 增加规则
     * 只有 type 和 attributes 时，将作为此类型全局属性，与其它所有同类型标签属性将合并
     * @param rules 规则
     * @param isMerge
     */
    add(rules: SchemaRule | SchemaGlobal | Array<SchemaRule | SchemaGlobal>, isMerge?: boolean): void;
    updateTagMap(): void;
    getTags(type: 'blocks' | 'inlines' | 'marks'): string[];
    remove(rule: SchemaRule): void;
    /**
     * 克隆当前schema对象
     */
    clone(): Schema;
    /**
     * 查找规则
     * @param callback 查找条件
     */
    find(callback: (rule: SchemaRule) => boolean): Array<SchemaRule>;
    getType(node: NodeInterface | Node, filter?: (rule: SchemaRule) => boolean): "block" | "inline" | "mark" | undefined;
    /**
     * 根据节点获取符合的规则
     * @param node 节点
     * @param filter 过滤
     * @returns
     */
    getRule(node: NodeInterface | Node, filter?: (rule: SchemaRule) => boolean): SchemaRule | undefined;
    /**
     * 检测节点是否符合某一属性规则
     * @param node 节点
     * @param attributes 属性规则
     */
    checkNode(node: NodeInterface | Node, attributes?: SchemaAttributes | SchemaStyle): boolean;
    /**
     * 检测值是否符合规则
     * @param schema
     * @param attributesName 属性名称
     * @param attributesValue 属性值
     * @param force
     */
    checkValue(schema: SchemaAttributes, attributesName: string, attributesValue?: string, force?: boolean): boolean;
    /**
     * 过滤节点样式
     * @param styles 样式
     * @param rule 规则
     * @param callback
     */
    filterStyles(styles: {
        [k: string]: string;
    }, rule: SchemaRule, callback?: (name: string, value: string) => void): void;
    /**
     * 过滤节点属性
     * @param attributes 属性
     * @param rule 规则
     * @param callback
     */
    filterAttributes(attributes: {
        [k: string]: string;
    }, rule: SchemaRule, callback?: (name: string, value: string) => void): void;
    /**
     * 过滤满足node节点规则的属性和样式
     * @param node 节点，用于获取规则
     * @param attributes 属性
     * @param styles 样式
     * @param apply 是否把过滤的属性和样式应用到节点上
     * @returns
     */
    filter(node: NodeInterface, attributes: {
        [k: string]: string;
    }, styles: {
        [k: string]: string;
    }, apply?: boolean): void;
    /**
     * 查找节点符合规则的最顶层的节点名称
     * @param name 节点名称
     * @returns 最顶级的block节点名称
     */
    closest(name: string): string;
    /**
     * 判断子节点名称是否允许放入指定的父节点中
     * @param source 父节点名称
     * @param target 子节点名称
     * @returns true | false
     */
    isAllowIn(source: string, target: string): boolean;
    addAllowIn(parent: string, child?: string): void;
    /**
     * 获取允许有子block节点的标签集合
     * @returns
     */
    getAllowInTags(): string[];
    /**
     * 获取能够合并的block节点的标签集合
     * @returns
     */
    getCanMergeTags(): string[];
}
export default Schema;
export declare const isSchemaValueObject: (value: SchemaValue) => value is SchemaValueObject;
export declare const isSchemaRule: (rule: SchemaRule | SchemaGlobal) => rule is SchemaRule;
