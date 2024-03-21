/// <reference types="parse" />
import Parse from 'parse/node';
export declare function getAllTrainingsData(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getTrainingByIdData(objectId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createTrainingData(objectData: any): Promise<any>;
export declare function updateTrainingData(objectId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteTrainingData(objectId: string): Promise<void>;
