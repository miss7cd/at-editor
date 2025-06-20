import { NodeInterface } from '../../../types/node';
import { Placement } from '../../../types/position';
import './index.css';
declare class Tooltip {
    static show(node: NodeInterface, title: string | NodeInterface, options?: {
        placement: Placement;
    }): void;
    static hide(): void;
}
export default Tooltip;
