import { EngineInterface } from '../../types';
import { Node } from './node';
import { Path } from './path';
import { BaseNode } from './types';
type BaseOperation = {
    type: string;
    path: Path;
    undoable?: boolean;
};
export interface InsertNodeOperation extends BaseOperation {
    type: 'insert_node';
    node: Node;
}
export interface InsertTextOperation extends BaseOperation {
    type: 'insert_text';
    offset: number;
    text: string;
}
export interface RemoveNodeOperation extends BaseOperation {
    type: 'remove_node';
    node: Node;
}
export interface RemoveTextOperation extends BaseOperation {
    type: 'remove_text';
    offset: number;
    text: string;
}
export interface SetNodeOperation extends BaseOperation {
    type: 'set_node';
    path: Path;
    properties: Record<string, any>;
    newProperties: Record<string, any>;
}
export type NodeOperation = InsertNodeOperation | RemoveNodeOperation | SetNodeOperation;
export type TextOperation = InsertTextOperation | RemoveTextOperation;
export type Operation = NodeOperation | TextOperation;
export declare const Operation: {
    transform: (engine: EngineInterface, records: MutationRecord[]) => Operation[];
    diff: (engine: EngineInterface, a: BaseNode[], b: BaseNode[], path: Path, index?: number, isLoading?: boolean) => Operation[];
    inverse: (operation: Operation) => Operation;
    isReverse: (a: Operation, b: Operation) => boolean;
    canOpAffectPath(operation: Operation, path: Path): boolean;
};
export {};
