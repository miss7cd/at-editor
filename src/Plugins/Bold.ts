import type MarkdownIt from 'markdown-it'
import { isEngine, MarkPlugin, PluginOptions } from '../Core'
import { MarkPlugin as CoreMarkPlugin } from '../Core/plugin'
// import type { BoldOptions } from '../Core/types'

export interface BoldOptions extends PluginOptions {
    hotkey?: string | Array<string>;
    markdown?: boolean;
}

const MARKDOWN_IT = 'markdown-it'

class Bold extends CoreMarkPlugin<BoldOptions> {
    static get pluginName() {
        return 'bold'
    }

    tagName = 'strong';

    init (): void {
        super.init()
        const editor = this.editor
        if (isEngine(editor)) {
            editor.on(MARKDOWN_IT, this.markdownIt)
        }
    }

    markdownIt = (mardown: MarkdownIt) => {
        if (this.options.markdown !== false) mardown.enable('emphasis')
    };

    hotkey () {
        return this.options.hotkey || 'mod+b'
    }

    conversion () {
        return [
            {
                from: {
                    span: {
                        style: {
                            'font-weight': ['bold', '700']
                        }
                    }
                },
                to: this.tagName
            },
            {
                from: 'b',
                to: this.tagName
            }
        ]
    }

    destroy (): void {
        this.editor.off(MARKDOWN_IT, this.markdownIt)
    }
}

export default Bold;
