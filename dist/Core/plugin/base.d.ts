import { CardInterface } from '../../types/card';
import { EditorInterface } from '../../types/editor';
import { PluginOptions, PluginInterface } from '../../types/plugin';
declare abstract class PluginEntry<T extends PluginOptions = PluginOptions> implements PluginInterface<T> {
    protected readonly editor: EditorInterface;
    options: T;
    constructor(editor: EditorInterface, options: PluginOptions);
    static readonly pluginName: string;
    readonly kind: string;
    readonly name: string;
    disabled?: boolean;
    /**
     * 初始化
     */
    init?(): void;
    /**
     * 查询插件状态
     * @param args 插件需要的参数
     */
    queryState?(...args: any): any;
    /**
     * 执行插件
     * @param args 插件需要的参数
     */
    abstract execute(...args: any): void;
    /**
     * 插件热键绑定，返回需要匹配的组合键字符，如 mod+b，匹配成功即执行插件，还可以带上插件执行所需要的参数，多个参数以数组形式返回{key:"mod+b",args:[]}
     * @param event 键盘事件
     */
    hotkey?(event?: KeyboardEvent): string | {
        key: string;
        args: any;
    } | Array<{
        key: string;
        args: any;
    }> | Array<string>;
    /**
     * 插件等待动作
     * @param callback 有待等待的动作时回调
     */
    waiting?(callback?: (name: string, card?: CardInterface, ...args: any) => boolean | number | void): Promise<void>;
    destroy?(): void;
}
export default PluginEntry;
