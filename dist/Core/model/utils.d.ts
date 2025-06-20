import { NodeInterface } from '../../types/node';
type InspectableObject = Record<string | number | symbol, unknown>;
export declare function isPlainObject(o: unknown): o is InspectableObject;
export declare const isTransientElementCache: (node: NodeInterface | Node, transientElements?: Array<Node>, loadingCards?: NodeInterface[]) => boolean;
export declare const isTransientElement: (node: NodeInterface | Node, transientElements?: Array<Node>, loadingCards?: NodeInterface[]) => boolean;
export declare const isTransientAttribute: (node: NodeInterface | Node, attr: string) => boolean;
export {};
