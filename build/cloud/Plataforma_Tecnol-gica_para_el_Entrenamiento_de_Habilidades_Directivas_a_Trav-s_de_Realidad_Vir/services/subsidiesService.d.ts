/// <reference types="parse" />
export declare function getAllSubsidiesService(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getAdviceByIdService(objectId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createSubsidieservice(objectData: any): Promise<any>;
export declare function updateSubsidieservice(objectId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteSubsidieservice(objectId: string): Promise<void>;
