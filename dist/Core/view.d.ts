import { ViewInterface, ViewOptions } from '../types/view';
import Editor from './editor';
import { Selector } from '../types';
declare class View<T extends ViewOptions = ViewOptions> extends Editor<T> implements ViewInterface<T> {
    readonly kind = "view";
    constructor(selector: Selector, options?: ViewOptions);
    render(content: string, trigger?: boolean): void;
}
export default View;
