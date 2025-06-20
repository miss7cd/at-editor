import merge from 'lodash/merge'
import type { LanguageInterface } from '../types'

/**
 * 语言包管理器
 */
class Language implements LanguageInterface {
    private data: Record<string, any> = {};
    private locale = 'zh-CN';

    constructor (locale: string, data: Record<string, string> = {}) {
        this.locale = locale
        this.data = data
    }

    add (data: object) {
        this.data = merge(this.data, data)
    }

    get<T extends string | object> (...keys: Array<string>): T {
        const get = (start = 0, language: Record<string, string>): T => {
            // eslint-disable-next-line no-unreachable-loop
            for (let i = start; i < keys.length; i++) {
                const value = language[keys[i]]
                if (typeof value === 'object') {
                    return get(i + 1, value)
                }
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                return value || ''
            }
            return language as T
        }
        return get(0, this.data[this.locale as string])
    }
}

export default Language
