/// <reference types="parse" />
import Parse from 'parse/node';
export declare function getAllTableFromJSONData(page: number, tableName: string): Promise<Parse.Object<Parse.Attributes>[]>;
export declare function getTableFromJSONByIdData(tableFromJSONId: string, tableName: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function registerTableFromJSONData(tablename: string, data: any): Promise<any>;
export declare function updateTableFromJSONData(tableFromJSONId: string, data: any, tableName: string): Promise<Parse.Object<Parse.Attributes>>;
export declare function deleteTableFromJSONData(tableFromJSONId: string, tableName: string): Promise<void>;
