import { RangeInterface } from '../../../types/range';
import { EngineInterface } from '../../../types/engine';
import { CardInterface } from '../../../types/card';
import { DragoverOptions } from '../../../types/change';
import './index.css';
declare class DragoverHelper {
    private x;
    private y;
    private doc;
    private range;
    private caretRange;
    private targetCard;
    private caretCard;
    private isCardLeftRange;
    private readonly engine;
    private readonly options;
    constructor(engine: EngineInterface, options?: DragoverOptions);
    /**
     * 获取当前坐标点的选区
     * @returns
     */
    getRangeForPoint(): RangeInterface | undefined;
    /**
     * 获取卡片
     */
    getCard(): CardInterface<import("../../../types/card").CardValue> | undefined;
    /**
     * 解析事件参数
     * @param e 事件
     */
    parseEvent(e: DragEvent): void;
    getRange(): RangeInterface | undefined;
    /**
     * 获取光标位置
     * @param width 光标宽度，默认为2
     */
    getRect(width?: number): {
        x: number | undefined;
        y: number | undefined;
        height: number;
    };
    getCursor(): import("../..").NodeInterface;
    removeCursor(): void;
    setCursor(): void;
}
export default DragoverHelper;
