/// <reference types="parse" />
export declare function getAllInterests(Parse: any): (request: any) => Promise<{
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
export declare function getInterestsById(Parse: any): (request: any) => Promise<{
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
export declare function createInterests(Parse: any): (request: any) => Promise<{
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
export declare function updateInterests(Parse: any): (request: any) => Promise<{
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
export declare function deleteInterests(Parse: any): (request: any) => Promise<{
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
