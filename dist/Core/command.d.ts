import { ChangeInterface, EditorInterface, CommandInterface } from '../types';
/**
 * 引擎命令管理器
 */
declare class Command implements CommandInterface {
    private readonly editor;
    constructor(editor: EditorInterface);
    /**
     * 查询插件是否启用
     * @param name 插件名称
     * @returns
     */
    queryEnabled(name: string): boolean;
    /**
     * 查询插件状态
     * @param name 插件名称
     * @param args 插件 queryState 返回需要的参数
     * @returns
     */
    queryState(name: string, ...args: any): any;
    /**
     * 执行命令前缓存当前光标位置并且光标不在编辑范围内就focus到编辑区域内
     * @returns
     */
    handleExecuteBefore(): ChangeInterface | undefined;
    /**
     * 执行插件命令
     * @param name 插件名称
     * @param args 插件所需要的参数
     * @returns
     */
    execute(name: string, ...args: any): void;
    /**
     * 执行插件里面的一个返回
     * @param name 插件名称
     * @param method 插件中的方法名称
     * @param args 插件中方法所需要的参数
     * @returns
     */
    executeMethod(name: string, method: string, ...args: any): any;
}
export default Command;
