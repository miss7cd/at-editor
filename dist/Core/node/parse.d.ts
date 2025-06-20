import { Selector, Context } from '../../types/node';
/**
 * 解析节点
 * @param selector 选择器
 * @param isSpecialText 是否为特殊文本比如 \u200b 0宽字符
 * @param context 上下文节点，默认使用 getDocument 获取document
 */
declare function domParser(selector: Selector, context?: Context | null | false): NodeList | Array<Node>;
export default domParser;
