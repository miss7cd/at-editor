import { EngineInterface } from '../types/engine';
import { HirtoryOperation, HistoryInterface } from '../types/history';
import { Operation } from './model';
import { RangePath } from '../types';
/**
 * 历史记录管理器
 */
declare class HistoryModel implements HistoryInterface {
    #private;
    private actionOps;
    private engine;
    private currentAction;
    private currentActionIndex;
    private filterEvents;
    private selfEvents;
    constructor(engine: EngineInterface);
    resetCurrentAction(): void;
    /**
     * 懒保存当前操作
     */
    lazySave: import("lodash").DebouncedFunc<() => void>;
    /**
     * 重置所有操作
     */
    reset(): void;
    /**
     * 监听过滤事件
     * @param filter 事件
     */
    onFilter(filter: (op: Operation) => boolean): void;
    /**
     * 监听收集本地操作事件
     * @param event 事件
     */
    onSelf(event: (ops: Operation[]) => Promise<boolean> | boolean | undefined): void;
    /**
     * 是否有撤销操作
     * @returns boolean
     */
    hasUndo(): boolean;
    /**
     * 是否有重做操作
     * @returns boolean
     */
    hasRedo(): boolean;
    /**
     * 执行撤销操作
     */
    undo(): void;
    /**
     * 执行重做操作
     */
    redo(): void;
    /**
     * 清空所有历史操作
     */
    clear(): void;
    saveOp(): void;
    handleSelfOps(ops: Operation[]): void;
    handleNLCardValue(op: Operation): void;
    handlePath: <T extends Array<any> | ReadonlyArray<any>>(path: T, id: string, bi: number, isOp?: boolean, filter?: (node: Node) => boolean) => T;
    handleRemoteOps(ops: Operation[]): void;
    getUndoOp(): HirtoryOperation | undefined;
    getRedoOp(): HirtoryOperation | undefined;
    getCurrentRangePath(): {
        start: RangePath;
        end: RangePath;
    } | undefined;
    getRangePathBeforeCommand(): {
        start: RangePath;
        end: RangePath;
    } | undefined;
}
export default HistoryModel;
