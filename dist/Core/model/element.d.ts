import { BaseNode } from './types';
export interface Element {
    type: string;
    children: BaseNode[];
}
export declare const Element: {
    isElement(value: any): value is Element;
    create(type: string, props?: Record<string, any>, children?: BaseNode[]): Element;
};
