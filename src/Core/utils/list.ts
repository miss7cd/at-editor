/**
 * 获取列表样式
 * @param type 类型
 * @param code
 */
export const getListStyle = (
    type?:
        | 'disc'
        | 'circle'
        | 'square'
        | 'lower-alpha'
        | 'lower-roman'
        | 'decimal'
        | string,
    code: string | number = 0
) => {
    if (!(code = +code)) return '•'
    const lowerCaseType = type?.toLowerCase()
    if (lowerCaseType === 'disc') {
        return '•'
    } else if (lowerCaseType === 'circle') {
        return '◦'
    } else if (lowerCaseType === 'square') {
        return '◼'
    } else if (lowerCaseType === 'lower-alpha') {
        return String.fromCharCode('a'.charCodeAt(0) + code)
    } else if (lowerCaseType === 'lower-roman') {
        return String.fromCharCode(8559 + code)
    } else if (lowerCaseType === 'decimal') {
        return code
    } else {
        return code
    }
}
