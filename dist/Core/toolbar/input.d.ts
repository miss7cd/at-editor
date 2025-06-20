import { NodeInterface } from '../../types/node';
import { InputInterface, InputOptions } from '../../types/toolbar';
export default class Input implements InputInterface {
    private options;
    private root;
    onEnter: (value: string) => void;
    onInput: (value: string) => void;
    onChange: (value: string) => void;
    constructor(options: InputOptions);
    find(role: string): NodeInterface;
    render(container: NodeInterface): void;
}
