import { EngineInterface } from '../../types/engine';
export interface Mutation {
    isStopped: boolean;
    isCache: boolean;
    onChange(fn: (records: MutationRecord[]) => void): void;
    offChange(fn: (records: MutationRecord[]) => void): void;
    start(): void;
    stop(): void;
    startCache(): void;
    submitCache(): void;
    destroyCache(): void;
    getCaches(): MutationRecord[];
    destroy(): void;
}
export declare const Mutation: {
    from: (engine: EngineInterface) => Mutation;
    destroy: (engine: EngineInterface) => void;
};
