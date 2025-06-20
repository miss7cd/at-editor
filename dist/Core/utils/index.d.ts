import MarkdownIt from 'markdown-it';
import type Token from 'markdown-it/lib/token';
import { EditorInterface, EngineInterface, ViewInterface } from '../../types';
import TinyCanvas from './tiny-canvas';
export * from './string';
export * from './user-agent';
export * from './list';
export * from './node';
export { TinyCanvas };
/**
 * 是否是引擎
 * @param editor 编辑器
 */
export declare const isEngine: (editor: EditorInterface) => editor is EngineInterface;
/**
 * 是否是View
 * @param editor 编辑器
 */
export declare const isView: (editor: EditorInterface) => editor is ViewInterface;
export declare const createMarkdownIt: (editor: EditorInterface, presetName?: MarkdownIt.PresetName) => MarkdownIt;
export declare const convertMarkdown: (editor: EditorInterface, markdown: MarkdownIt, tokens: Token[], checkInline?: boolean) => string | null;
