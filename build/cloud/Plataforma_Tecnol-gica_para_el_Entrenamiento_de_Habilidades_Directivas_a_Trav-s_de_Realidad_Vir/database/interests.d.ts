/// <reference types="parse" />
import Parse from 'parse/node';
export declare function getAllInterestsData(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getInterestsByIdData(objectId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createInterestsData(objectData: any): Promise<any>;
export declare function updateInterestsData(objectId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteInterestsData(objectId: string): Promise<void>;
