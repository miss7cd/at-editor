type DOMNode = globalThis.Node;
type DOMComment = globalThis.Comment;
type DOMElement = globalThis.Element;
type DOMHTMLElement = globalThis.HTMLElement;
type DOMText = globalThis.Text;
type DOMRange = globalThis.Range;
type DOMSelection = globalThis.Selection;
type DOMStaticRange = globalThis.StaticRange;
export type { DOMNode, DOMComment, DOMElement, DOMText, DOMRange, DOMSelection, DOMStaticRange };
declare global {
    interface Window {
        Selection: typeof Selection['constructor'];
        DataTransfer: typeof DataTransfer['constructor'];
        Node: typeof Node['constructor'];
    }
}
/**
 * Returns the host window of a DOM node
 */
export declare const getDefaultView: (value: any) => Window | null;
/**
 * Check if a DOM node is a comment node.
 */
export declare const isDOMComment: (value: any) => value is DOMComment;
/**
 * Check if a DOM node is an element node.
 */
export declare const isDOMElement: (value: any) => value is DOMElement;
export declare const isDOMHTMLElement: (value: any) => value is DOMHTMLElement;
/**
 * Check if a value is a DOM node.
 */
export declare const isDOMNode: (value: any) => value is DOMNode;
/**
 * Check if a value is a DOM selection.
 */
export declare const isDOMSelection: (value: any) => value is DOMSelection;
/**
 * Check if a DOM node is an element node.
 */
export declare const isDOMText: (value: any) => value is DOMText;
