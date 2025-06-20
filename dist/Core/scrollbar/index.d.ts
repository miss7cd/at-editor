import { EventEmitter2 } from 'eventemitter2';
import { NodeInterface } from '../../types';
import './index.css';
export type ScrollbarDragging = {
    point: number;
    position: number;
};
export type ScrollbarCustomeOptions = {
    onScrollX?: (x: number) => number;
    getOffsetWidth?: (width: number) => number;
    getScrollLeft?: (left: number) => number;
};
declare class Scrollbar extends EventEmitter2 {
    #private;
    private container;
    private x;
    private y;
    private shadow;
    private scrollBarX?;
    private slideX?;
    private slideXDragging?;
    private scrollBarY?;
    private slideY?;
    private slideYDragging?;
    private shadowLeft?;
    private shadowRight?;
    private oWidth;
    private oHeight;
    private sWidth;
    private sHeight;
    private xWidth;
    private yHeight;
    shadowTimer?: ReturnType<typeof setTimeout>;
    constructor(container: NodeInterface | Node, x?: boolean, y?: boolean, shadow?: boolean, scroll?: ScrollbarCustomeOptions);
    /**
     * 设置滚动条内容节点
     * @param content
     */
    setContentNode(content?: NodeInterface | Node): void;
    init(): void;
    getWidth(): number;
    refresh: () => void;
    /**
     * 启用鼠标在内容节点上滚动或在移动设备使用手指滑动
     */
    enableScroll(): void;
    /**
     * 禁用鼠标在内容节点上滚动或在移动设备使用手指滑动
     */
    disableScroll(): void;
    scroll: (event: Event | {
        top?: number;
        left?: number;
    }) => void;
    wheelXScroll: import("lodash").DebouncedFuncLeading<(event: any) => void>;
    wheelYScroll: import("lodash").DebouncedFuncLeading<(event: any) => void>;
    bindWheelScroll: (event: any) => void;
    /**
     * 在节点上左右滑动手指
     * @param event
     * @returns
     */
    bindContainerTouchX: (event: TouchEvent) => void;
    /**
     * 在节点上上下滑动手指
     * @param event
     * @returns
     */
    bindContainerTouchY: (event: TouchEvent) => void;
    bindEvents(): void;
    /**
     * 获取鼠标事件或者触摸事件的 clientX clientY
     * @param event
     * @returns
     */
    getEventClientOffset: (event: MouseEvent | TouchEvent) => {
        x: number;
        y: number;
    };
    /**
     * 横向滚动
     * @param event
     */
    scrollX: (event: MouseEvent | TouchEvent) => void;
    scrollY: (event: MouseEvent | TouchEvent) => void;
    scrollXEnd: () => void;
    scrollYEnd: () => void;
    scrollXStart: (event: MouseEvent | TouchEvent) => void;
    scrollYStart: (event: MouseEvent | TouchEvent) => void;
    bindXScrollEvent: () => void;
    bindYScrollEvent: () => void;
    reRenderShadow: (width: number) => void;
    reRenderX: (left: number) => void;
    reRenderY: (top: number) => void;
    destroy(): void;
}
export default Scrollbar;
