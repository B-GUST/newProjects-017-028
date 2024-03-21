/// <reference types="parse" />
export declare function getAllInterestsService(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getInterestsByIdService(objectId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createInterestsService(objectData: any): Promise<any>;
export declare function updateInterestsService(objectId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteInterestsService(objectId: string): Promise<void>;
