/// <reference types="parse" />
import Parse from 'parse/node';
export declare function getAllUsersData(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getUserData(userId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createNewUserData(objectData: any): Promise<any>;
export declare function updateUserData(userId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteUserData(userId: string): Promise<void>;
