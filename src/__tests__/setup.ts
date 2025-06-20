/// <reference types="jest" />

// Jest 测试设置文件

// 模拟 DOM 环境
import '@testing-library/jest-dom';

// 声明全局类型
declare global {
    var createEditorElement: () => HTMLElement;
    var removeEditorElement: () => void;
    var console: Console;
}

// 全局测试设置
beforeEach(() => {
    // 清理 DOM
    document.body.innerHTML = '';
});

afterEach(() => {
    // 清理事件监听器
    document.removeEventListener('keydown', () => {});
    document.removeEventListener('keyup', () => {});
    document.removeEventListener('input', () => {});
});

// 全局测试工具函数
global.createEditorElement = () => {
    const element = document.createElement('div');
    element.id = 'editor';
    element.contentEditable = 'true';
    document.body.appendChild(element);
    return element;
};

global.removeEditorElement = () => {
    const element = document.getElementById('editor');
    if (element) {
        document.body.removeChild(element);
    }
};

// 模拟 window.getSelection
Object.defineProperty(window, 'getSelection', {
    writable: true,
    value: jest.fn().mockReturnValue({
        rangeCount: 1,
        getRangeAt: jest.fn().mockReturnValue({
            startContainer: document.createElement('div'),
            startOffset: 0,
            endContainer: document.createElement('div'),
            endOffset: 0,
            collapsed: true,
            cloneRange: jest.fn(),
            setStart: jest.fn(),
            setEnd: jest.fn(),
            selectNodeContents: jest.fn(),
            deleteContents: jest.fn(),
            extractContents: jest.fn(),
            insertNode: jest.fn(),
            surroundContents: jest.fn(),
            compareBoundaryPoints: jest.fn(),
            cloneContents: jest.fn(),
            detach: jest.fn(),
        }),
        removeAllRanges: jest.fn(),
        addRange: jest.fn(),
    }),
});

// 模拟 document.execCommand
Object.defineProperty(document, 'execCommand', {
    writable: true,
    value: jest.fn().mockReturnValue(true),
});

// 模拟 console 方法
global.console = {
    ...console,
    log: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
}; 