import { NodeInterface } from '../../types/node';
import { ButtonInterface, ButtonOptions } from '../../types/toolbar';
export default class Button implements ButtonInterface {
    private options;
    private root;
    constructor(options: ButtonOptions);
    getPlacement(): "bottom" | "top";
    render(container: NodeInterface): void;
}
