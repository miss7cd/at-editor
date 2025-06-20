import { NodeInterface } from '../../types/node';
import { ToolbarOptions, ToolbarInterface } from '../../types/toolbar';
import Button from './button';
import Dropdown from './dropdown';
import Input from './input';
import Tooltip from './tooltip';
import Switch from './switch';
import './index.css';
declare class Toolbar implements ToolbarInterface {
    private options;
    root: NodeInterface;
    private items;
    constructor(options: ToolbarOptions);
    getPlacement(): "bottom" | "top";
    addItems(node: NodeInterface): void;
    find(role: string): NodeInterface;
    destroy(): void;
    hide(): void;
    show(): void;
    renderGroup(): NodeInterface;
    render(container?: NodeInterface): NodeInterface;
    update(options: ToolbarOptions): void;
}
export default Toolbar;
export { Button, Input, Dropdown, Tooltip, Switch };
