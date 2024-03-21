/// <reference types="parse" />
export declare function getAllTrainingService(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getTrainingByIdService(objectId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createTrainingService(objectData: any): Promise<any>;
export declare function updateTrainingService(objectId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteTrainingService(objectId: string): Promise<void>;
