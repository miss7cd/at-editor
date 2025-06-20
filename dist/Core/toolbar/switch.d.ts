import { NodeInterface } from '../../types/node';
import { SwitchOptions } from '../../types/toolbar';
export default class {
    private options;
    private root;
    private switch;
    constructor(options: SwitchOptions);
    render(container: NodeInterface): void;
    updateSwitch(): void;
}
