import { NodeInterface } from '../../../types/node';
import { DropdownSwitchOptions } from '../../../types/toolbar';
export default class {
    private options;
    private root;
    private switch;
    constructor(options: DropdownSwitchOptions);
    renderTo(container: NodeInterface): void;
    updateSwitch(): void;
}
