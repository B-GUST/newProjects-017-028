/// <reference types="parse" />
export declare function getAllPersonsService(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getPersonByIdService(personId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createPersonService(objectData: any): Promise<any>;
export declare function updatePersonService(personId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deletePersonService(objectId: string): Promise<void>;
