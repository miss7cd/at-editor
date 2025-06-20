import { PluginOptions, Plugin } from '../Core';
export interface RedoOptions extends PluginOptions {
    hotkey?: string | Array<string>;
}
declare class Redo extends Plugin<RedoOptions> {
    static get pluginName(): string;
    execute(): void;
    queryState(): boolean | undefined;
    hotkey(): string | string[];
    init(): void;
}
export default Redo;
