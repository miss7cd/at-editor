import { CardInterface, MaximizeInterface, EditorInterface, NodeInterface } from '../../../types';
import './index.css';
declare class Maximize implements MaximizeInterface {
    protected card: CardInterface;
    protected node?: NodeInterface;
    private readonly editor;
    constructor(editor: EditorInterface, card: CardInterface);
    restore(): void;
    maximize(): void;
}
export default Maximize;
