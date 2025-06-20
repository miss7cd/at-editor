import { EngineInterface } from '../../types';
export declare const getRangeRemotePath: (engine: EngineInterface) => {
    start: {
        id: string;
        leftText: string;
        rightText: string;
    } | undefined;
    end: {
        id: string;
        leftText: string;
        rightText: string;
    } | undefined;
} | undefined;
type RemoteAttr = {
    id: string;
    leftText: string;
    rightText: string;
};
type RemotePath = {
    start?: RemoteAttr;
    end?: RemoteAttr;
};
export declare const applyRangeByRemotePath: (engine: EngineInterface, path: RemotePath, callback?: () => void) => void;
export {};
