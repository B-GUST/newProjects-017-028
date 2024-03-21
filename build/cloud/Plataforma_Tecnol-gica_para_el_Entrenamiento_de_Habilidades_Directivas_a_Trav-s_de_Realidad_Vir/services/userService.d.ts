/// <reference types="parse" />
import Parse from 'parse/node';
export declare function getAllUsersService(page: number): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getUserService(userId: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function createUserService(objectData: any): Promise<any>;
export declare function updateUserService(userId: string, objectData: any): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteUserService(userId: string, sessionToken: string): Promise<{
    success: boolean;
    message: string;
}>;
