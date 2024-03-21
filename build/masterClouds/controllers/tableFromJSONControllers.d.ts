/// <reference types="parse" />
export declare function getAllTableFromJSON(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    store: Parse.Object<Parse.Attributes>[];
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    store?: undefined;
}>;
export declare function getTableFromJSONById(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    store: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    store?: undefined;
}>;
export declare function registerTableFromJSON(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    message: string;
    store: any;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    message?: undefined;
    store?: undefined;
}>;
export declare function updateTableFromJSON(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    store: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    store?: undefined;
}>;
export declare function deleteTableFromJSON(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
}>;
