/**
 * 随机字符串
 * @param length 长度
 */
export declare const random: (length?: number) => string;
/**
 * 驼峰命名转换枚举
 */
export declare enum CamelCaseType {
    UPPER = "upper",
    LOWER = "lower"
}
/**
 * 转换为驼峰命名法
 * @param {string} value 需要转换的字符串
 * @param {upper,lower} type 转换类型，upper 大驼峰命名法，lower，小驼峰命名法（默认）
 */
export declare const toCamelCase: (value: string, type?: CamelCaseType) => string;
/**
 * 颜色转换为16进制颜色代码
 * @param {string} color
 */
export declare const toHex: (color: string) => string;
/**
 * 将节点属性转换为 map 数据类型
 * @param {string} value
 */
export declare const getAttrMap: (value: string) => {
    [k: string]: string;
};
/**
 * 将 style 样式转换为 map 数据类型
 * @param {string} style
 */
export declare const getStyleMap: (style: string) => Record<string, string>;
/**
 * 使用window内置函数getComputedStyle获取节点style
 * @param {Node} node
 * @param {string} attrName
 */
export declare const getComputedStyle: (element: Element, attrName: string) => any;
/**
 * 字符串编码
 * @param value 需要编码的字符串
 */
export declare const escape: (value: string) => string;
/**
 * 字符串解码
 * @param value 需要解码的字符串
 */
export declare const unescape: (value: string) => string;
/**
 * 字符 `.` 编码
 * @param value 需要编码的字符串
 */
export declare const escapeDots: (value: string) => string;
/**
 * 字符 `.` 解码
 * @param value 需要解码的字符串
 */
export declare const unescapeDots: (value: string) => string;
/**
 * 给值增加单位
 * @param value 值
 * @param unit 单位
 */
export declare const addUnit: (value: string | number, unit?: string) => string | number;
/**
 * 移除值的单位
 * @param value 值
 */
export declare const removeUnit: (value: string) => number;
/**
 * Card组件值编码
 * @param value 需要编码的字符串
 */
export declare const encodeCardValue: <T = Record<string, any>>(value: T) => string;
/**
 * Card组件值解码
 * @param value 需要解码的字符串
 */
export declare const decodeCardValue: <T = Record<string, any>>(value: string) => T;
/**
 * 转换光标以及Card组件标签为html
 * @param value 需要转换的字符串
 */
export declare const transformCustomTags: (value: string) => string;
/**
 * 验证是否是合法的url地址
 * @param url URL地址
 */
export declare const validUrl: (url: string) => boolean;
export declare const sanitizeUrl: (url: string) => string;
/**
 * 格式化编辑器值，移除光标标记标签，以及标签无效属性
 * @param value
 * @returns
 */
export declare const formatEngineValue: (value: string) => string;
/**
 * 格式化热键
 * @param key 热键
 */
export declare const formatHotkey: (key: string) => string;
