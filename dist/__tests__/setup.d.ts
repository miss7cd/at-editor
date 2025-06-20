import '@testing-library/jest-dom';
declare global {
    var createEditorElement: () => HTMLElement;
    var removeEditorElement: () => void;
    var console: Console;
}
