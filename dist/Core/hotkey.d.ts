import type { EngineInterface, HotkeyInterface } from '../types';
/**
 * 快捷键管理器
 * @class Hotkey
 */
declare class Hotkey implements HotkeyInterface {
    private engine;
    private disabled;
    constructor(engine: EngineInterface);
    match(e: KeyboardEvent): void;
    /**
     * 处理按键按下事件
     * @param e 事件
     */
    trigger(e: KeyboardEvent): void;
    /**
     * 启用快捷键
     */
    enable(): void;
    /**
     * 禁用快捷键
     */
    disable(): void;
    /**
     * 销毁快捷键
     */
    destroy(): void;
}
export default Hotkey;
