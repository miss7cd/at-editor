import { EditorInterface, NodeInterface, ConversionInterface, ConversionData, ConversionFromValue, ConversionToValue } from '../../types';
declare class Conversion implements ConversionInterface {
    private editor;
    private data;
    constructor(editor: EditorInterface);
    getData(): ConversionData;
    clone(): Conversion;
    add(from: ConversionFromValue, to: ConversionToValue): void;
    transform(node: NodeInterface, filter?: (item: {
        from: ConversionFromValue;
        to: ConversionToValue;
    }) => boolean): {
        rule: import("../../types").ConversionRule;
        node: {
            name: string;
            style: Record<string, string>;
            attributes: {
                [k: string]: string;
            };
        };
        replace: boolean;
    } | undefined;
}
export default Conversion;
