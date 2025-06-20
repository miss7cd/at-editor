import type { NodeInterface, SchemaInterface } from '../../types';
import { EngineInterface } from '../../types/engine';
export default class Paste {
    protected source: string;
    protected engine: EngineInterface;
    protected schema: SchemaInterface;
    constructor(source: string, engine: EngineInterface);
    parser(): DocumentFragment;
    getDefaultStyle(container?: NodeInterface): {
        color: string;
        'background-color': string;
        'font-size': string;
    };
    elementNormalize(fragment: DocumentFragment): void;
    normalize(forceGenerateAllId?: boolean): DocumentFragment;
    removeElementNodes(fragment: NodeInterface): void;
}
