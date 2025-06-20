import { PluginOptions } from '../Core';
import { Plugin as CorePlugin } from '../Core/plugin';
export interface UndoOptions extends PluginOptions {
    hotkey?: string | Array<string>;
}
export default class Undo extends CorePlugin {
    static get pluginName(): string;
    execute(): void;
    queryState(): boolean | undefined;
    hotkey(): any;
    init(): void;
}
