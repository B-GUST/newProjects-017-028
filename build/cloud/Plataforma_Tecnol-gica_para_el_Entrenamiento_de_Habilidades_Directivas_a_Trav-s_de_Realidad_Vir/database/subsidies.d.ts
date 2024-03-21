/// <reference types="parse" />
import Parse from 'parse/node';
export declare function getAllSubsidiesData(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getSubsidiesByIdData(subsidiesId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createSubsidiesData(objectData: any): Promise<any>;
export declare function updateSubsidiesData(subsidiesId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteSubsidiesData(subsidiesId: string): Promise<void>;
