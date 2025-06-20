import type { LanguageInterface } from '../types';
/**
 * 语言包管理器
 */
declare class Language implements LanguageInterface {
    private data;
    private locale;
    constructor(locale: string, data?: Record<string, string>);
    add(data: object): void;
    get<T extends string | object>(...keys: Array<string>): T;
}
export default Language;
