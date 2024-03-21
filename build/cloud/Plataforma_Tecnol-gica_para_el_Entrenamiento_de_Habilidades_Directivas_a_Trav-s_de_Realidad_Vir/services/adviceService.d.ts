/// <reference types="parse" />
export declare function getAllAdvicesService(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getAdviceByIdService(objectId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createAdviceService(objectData: any): Promise<any>;
export declare function updateAdviceService(objectId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteAdviceService(objectId: string): Promise<void>;
