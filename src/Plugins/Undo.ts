import { isEngine, PluginOptions, Plugin } from '../Core'
import { Plugin as CorePlugin } from '../Core/plugin'

export interface UndoOptions extends PluginOptions {
    hotkey?: string | Array<string>;
}

export default class Undo extends CorePlugin {
    static get pluginName () {
        return 'undo'
    }

    execute () {
        const editor = this.editor
        if (!isEngine(editor)) return
        if (!editor.readonly) editor.history.undo()
    }

    queryState () {
        const editor = this.editor
        if (!isEngine(editor) || editor.readonly) return
        return editor.history.hasUndo()
    }

    hotkey () {
        return this.options.hotkey || ['mod+z', 'shift+mod+z']
    }

    init() {
        // ...实现...
    }
}
