/// <reference types="parse" />
export declare function getAllCategoryService(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getCategoryByIdService(objectId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createCategoryService(objectData: any): Promise<any>;
export declare function updateCategoryService(objectId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteCategoryService(objectId: string): Promise<void>;
