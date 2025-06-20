import type MarkdownIt from 'markdown-it';
import { PluginOptions } from '../Core';
import { MarkPlugin as CoreMarkPlugin } from '../Core/plugin';
export interface BoldOptions extends PluginOptions {
    hotkey?: string | Array<string>;
    markdown?: boolean;
}
declare class Bold extends CoreMarkPlugin<BoldOptions> {
    static get pluginName(): string;
    tagName: string;
    init(): void;
    markdownIt: (mardown: MarkdownIt) => void;
    hotkey(): string | string[];
    conversion(): ({
        from: {
            span: {
                style: {
                    'font-weight': string[];
                };
            };
        };
        to: string;
    } | {
        from: string;
        to: string;
    })[];
    destroy(): void;
}
export default Bold;
