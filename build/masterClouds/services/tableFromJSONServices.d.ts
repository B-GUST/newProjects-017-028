/// <reference types="parse" />
import Parse from 'parse/node';
export declare function getAllTableFromJSONService(page: number, tableName: string, sessionToken: string): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getTableFromJSONByIdService(tableFromJSONId: string, tableName: string, sessionToken: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function registerTableFromJSONService(tablename: string, data: any, sessionToken: string): Promise<any>;
export declare function updateTableFromJSONService(tableFromJSONId: string, data: any, tableName: string, sessionToken: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteTableFromJSONService(tableFromJSONId: string, tableName: string, sessionToken: string): Promise<void>;
