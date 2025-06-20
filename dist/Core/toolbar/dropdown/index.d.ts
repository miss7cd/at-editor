import { NodeInterface } from '../../../types/node';
import { DropdownInterface, DropdownOptions } from '../../../types/toolbar';
export default class Dropdown implements DropdownInterface {
    private options;
    private root;
    private dropdown;
    constructor(options: DropdownOptions);
    documentMouseDown: (e: MouseEvent) => void;
    initToggleEvent(): void;
    toggleDropdown(): void;
    showDropdown(): void;
    hideDropdown(): void;
    getPlacement(): "bottom" | "top";
    renderTooltip(): void;
    renderDropdown(): void;
    render(container: NodeInterface): void;
    destroy(): void;
}
