/// <reference types="parse" />
import Parse from 'parse/node';
export declare function getAllAdvicesData(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getAdviceByIdData(objectId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createAdviceData(objectData: any): Promise<any>;
export declare function updateAdviceData(objectId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteAdviceData(objectId: string): Promise<void>;
