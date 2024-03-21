/// <reference types="parse" />
import Parse from 'parse/node';
export declare function getAllAttitudesData(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getAttitudesByIdData(objectId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createAttitudesData(objectData: any): Promise<any>;
export declare function updateAttitudesData(objectId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteAttitudesData(objectId: string): Promise<void>;
