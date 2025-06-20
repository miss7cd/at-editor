import { Element } from './element';
import { BaseNode } from './types';
export type Path = number[];
export declare const Path: {
    isPath(value: any): value is Path;
    setPath(node: BaseNode, parent: Element, index: number): void;
    getPath(node: BaseNode): Path;
    getIndex(node: BaseNode): number;
    isEqual(path: Path, other: Path): boolean;
    isReverse(path: Path, other: Path, offset?: number): boolean;
    commonLength(path: Path, other: Path): number | null;
    next(path: Path): Path;
};
