import { DOMNode } from './dom';
import { Element } from './element';
import { Text } from './text';
import { BaseNode } from './types';
import { Path } from './path';
import { SchemaInterface } from '../../types';
export type Node = BaseNode;
export declare const Node: {
    createFromDOM: (domNode: DOMNode, schema?: SchemaInterface) => Text | Element | undefined;
    findNode: (domNode: DOMNode) => BaseNode | undefined;
    setDOM: (node: Node, domNode: DOMNode, schema?: SchemaInterface) => void;
    setSchemaType: (element: Element, node: DOMNode, schema: SchemaInterface) => void;
    isBlock: (node: Node) => boolean;
    isInline: (node: Node) => boolean;
    isMark: (node: Node) => boolean;
    isVoid: (node: Node) => number | boolean;
    get: (root: Node, path: Path) => BaseNode;
};
