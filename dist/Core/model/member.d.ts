import { EngineInterface, RangePath } from '../../types';
/**
 * 写作者光标属性
 */
export type CursorAttribute = {
    /**
     * 协作者id
     */
    uuid: string;
    /**
     * 光标位置
     */
    path?: {
        start: RangePath;
        end: RangePath;
    };
    /**
     * 是否激活
     */
    active: boolean;
    /**
     * 是否强制更新
     */
    force?: boolean;
};
/**
 * 协作者信息
 */
export type CollaborationMember = {
    /**
     * 协作者id
     */
    uuid: string;
    /**
     * 协作者名称
     */
    name: string;
    /**
     * 协作者颜色
     */
    color: string;
};
export declare const CollaborationMember: {
    fromEngine: (engine: EngineInterface) => {
        getMembers(): CollaborationMember[];
        add(collaborationMember: CollaborationMember): void;
        remove(uuid: string): void;
        getCurrent(): CollaborationMember | null;
        setCurrent(uuid: string | CollaborationMember): void;
    };
};
