import { EventInterface, EventListener } from '../../types/node';
/**
 * 事件
 */
declare class Event implements EventInterface {
    readonly listeners: {
        [x: string]: EventListener[];
    };
    /**
     * 绑定事件
     * @param {string} eventType 事件名称
     * @param {Function} listener 事件处理方法
     * @param {boolean} options 是否重写事件
     */
    on<R = any, F extends EventListener<R> = EventListener<R>>(eventType: string, listener: F, options?: boolean | AddEventListenerOptions): void;
    /**
     * 解除绑定
     * @param {string} eventType
     * @param listener
     */
    off(eventType: string, listener: EventListener): void;
    /**
     * 触发事件
     * @param eventType 事件类型
     * @param args 事件参数
     */
    trigger<R = any>(eventType: string, ...args: any): R;
    destroy(): void;
}
export default Event;
