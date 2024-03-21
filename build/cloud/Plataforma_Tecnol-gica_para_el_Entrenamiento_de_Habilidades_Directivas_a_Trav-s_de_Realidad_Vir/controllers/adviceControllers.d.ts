/// <reference types="parse" />
export declare function getAllAdvices(Parse: any): (request: any) => Promise<{
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
export declare function getAdviceById(Parse: any): (request: any) => Promise<{
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
export declare function createAdvice(Parse: any): (request: any) => Promise<{
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
export declare function updateAdvice(Parse: any): (request: any) => Promise<{
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
export declare function deleteAdvice(Parse: any): (request: any) => Promise<{
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
