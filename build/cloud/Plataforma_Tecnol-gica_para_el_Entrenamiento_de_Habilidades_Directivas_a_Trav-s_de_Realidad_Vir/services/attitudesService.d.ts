/// <reference types="parse" />
export declare function getAllAttitudesService(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getAttitudesByIdService(objectId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createAttitudesService(objectData: any): Promise<any>;
export declare function updateAttitudesService(objectId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteAttitudesService(objectId: string): Promise<void>;
