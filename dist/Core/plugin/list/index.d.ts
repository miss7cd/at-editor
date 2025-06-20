import { NodeInterface, PluginOptions } from '../../../types';
import { ListInterface } from '../../../types/list';
import BlockEntry from '../block';
import './index.css';
declare abstract class ListEntry<T extends PluginOptions = PluginOptions> extends BlockEntry<T> implements ListInterface<T> {
    cardName?: string;
    private isPasteList;
    /**
     * 是否能够自动合并
     */
    canMerge: boolean;
    init(): void;
    queryState(): boolean;
    /**
     * 判断节点是否是当前列表所需要的节点
     * @param node 节点
     */
    abstract isCurrent(node: NodeInterface): boolean;
    pasteBefore: (documentFragment: DocumentFragment) => void;
    pasteInsert: () => void;
    pasteAfter: () => void;
    destroy(): void;
}
export default ListEntry;
