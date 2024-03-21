/// <reference types="parse" />
export declare function getAllAttitudes(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    data: Parse.Object<Parse.Attributes>[];
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    data?: undefined;
}>;
export declare function getAttitudesById(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    data: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    data?: undefined;
}>;
export declare function createAttitudes(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    data: any;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    data?: undefined;
}>;
export declare function updateAttitudes(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    data: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    data?: undefined;
}>;
export declare function deleteAttitudes(Parse: any): (request: any) => Promise<{
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
