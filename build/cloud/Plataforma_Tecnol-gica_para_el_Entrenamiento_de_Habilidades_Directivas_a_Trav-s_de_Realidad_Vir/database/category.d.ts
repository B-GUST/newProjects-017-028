/// <reference types="parse" />
import Parse from 'parse/node';
export declare function getAllCategoryData(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getCategoryByIdData(objectId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createCategoryData(objectData: any): Promise<any>;
export declare function updateCategoryData(objectId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteCategoryData(objectId: string): Promise<void>;
