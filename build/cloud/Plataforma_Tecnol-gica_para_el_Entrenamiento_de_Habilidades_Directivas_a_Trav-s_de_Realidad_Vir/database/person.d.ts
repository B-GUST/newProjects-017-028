/// <reference types="parse" />
import Parse from 'parse/node';
export declare function getAllPersonsData(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getPersonByIdData(personId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createPersonData(objectData: any): Promise<any>;
export declare function updatePersonData(personId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deletePersonData(personId: string): Promise<void>;
