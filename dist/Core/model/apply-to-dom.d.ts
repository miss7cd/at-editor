import { EngineInterface } from '../../types';
import { Operation } from './operation';
import { Path } from './path';
import { DOMElement, DOMNode } from './dom';
export declare const findDOMByPath: (engine: EngineInterface, root: DOMNode, path: Path, isForceRenderCard?: boolean) => {
    parent: DOMElement;
    node: DOMNode;
    offset: number;
};
export declare const applyToDOM: (engine: EngineInterface, operation: Operation, isRemote: boolean) => import("../../types").NodeInterface | undefined;
