import { isEngine, PluginOptions, Plugin } from '../Core'
// import { Plugin } from '../Core/plugin'

export interface RedoOptions extends PluginOptions {
    hotkey?: string | Array<string>;
}

class Redo extends Plugin<RedoOptions> {
    static get pluginName () {
        return 'redo'
    }

    execute () {
        const editor = this.editor
        if (!isEngine(editor)) return
        if (!editor.readonly) editor.history.redo()
    }

    queryState () {
        const editor = this.editor
        if (!isEngine(editor) || editor.readonly) return
        return editor.history.hasRedo()
    }

    hotkey () {
        return this.options.hotkey || ['mod+y', 'shift+mod+y']
    }

    init() {
        // ...实现...
    }
}

export default Redo;
