import { NodeInterface } from '../../types/node';
import { ChangeInterface, ChangeOptions, ChangeRangeInterface } from '../../types/change';
import { EngineInterface } from '../../types/engine';
import { RangeInterface, RangePath } from '../../types/range';
import ChangeEvent from './event';
import NativeEvent from './native-event';
declare class ChangeModel implements ChangeInterface {
    private engine;
    private options;
    event: ChangeEvent;
    valueCached: string | null;
    onChange: (trigger: 'remote' | 'local' | 'both') => void;
    onRealtimeChange: (trigger: 'remote' | 'local') => void;
    onSelect: (range?: RangeInterface) => void;
    onSelectStart: () => void;
    onSelectEnd: () => void;
    onSetValue: () => void;
    rangePathBeforeCommand?: {
        start: RangePath;
        end: RangePath;
    };
    marks: Array<NodeInterface>;
    blocks: Array<NodeInterface>;
    inlines: Array<NodeInterface>;
    changeTrigger: Array<string>;
    range: ChangeRangeInterface;
    nativeEvent: NativeEvent;
    constructor(engine: EngineInterface, options?: ChangeOptions);
    init(): void;
    private _change;
    change(isRemote?: boolean, applyNodes?: Array<NodeInterface>): void;
    isComposing(): boolean;
    isSelecting(): boolean;
    initValue(range?: RangeInterface, apply?: boolean, container?: NodeInterface): void;
    setValue(value: string, onParse?: (node: NodeInterface) => void, callback?: (count: number) => void): void;
    setHtml(html: string, callback?: (count: number) => void): void;
    setMarkdown(text: string, callback?: (count: number) => void): void;
    getOriginValue(container?: NodeInterface, isClone?: boolean): string;
    getValue(options?: {
        ignoreCursor?: boolean;
    }): string;
    cacheRangeBeforeCommand(): void;
    getRangePathBeforeCommand(): {
        start: RangePath;
        end: RangePath;
    } | undefined;
    isEmpty(): boolean;
    combinText(): void;
    /**
     * 应用一个具有改变dom结构的操作
     * @param range 光标
     */
    apply(range?: RangeInterface): void;
    /**
     * 插入片段
     * @param fragment 片段
     * @param range 指定光标区域
     * @param callback 插入后的回调函数
     * @param followActiveMark 删除后空标签是否跟随当前激活的mark样式
     */
    insert(fragment: DocumentFragment, range?: RangeInterface, callback?: (range: RangeInterface) => void, followActiveMark?: boolean): void;
    paste(html: string, range?: RangeInterface, callback?: (count: number) => void): void;
    /**
     * 删除内容
     * @param range 光标，默认获取当前光标
     * @param isDeepMerge 删除后是否合并
     * @param followActiveMark 删除后空标签是否跟随当前激活的mark样式
     */
    delete(range?: RangeInterface, isDeepMerge?: boolean, followActiveMark?: boolean): void;
    /**
     * 去除当前光标最接近的block节点或传入的节点外层包裹
     * @param node 节点
     */
    unwrap(node?: NodeInterface): void;
    /**
     * 删除当前光标最接近的block节点或传入的节点后与前面一个节点后合并
     * @param node 节点
     */
    mergeAfterDelete(node?: NodeInterface): void;
    destroy(): void;
}
export default ChangeModel;
