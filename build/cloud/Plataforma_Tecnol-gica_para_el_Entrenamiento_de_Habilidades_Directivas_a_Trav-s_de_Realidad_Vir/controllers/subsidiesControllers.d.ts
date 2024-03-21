/// <reference types="parse" />
export declare function getAllSubsidies(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    subsidies: Parse.Object<Parse.Attributes>[];
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    subsidies?: undefined;
}>;
export declare function getSubsidiesById(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    subsidies: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    subsidies?: undefined;
}>;
export declare function createSubsidies(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    subsidies: any;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    subsidies?: undefined;
}>;
export declare function updateSubsidies(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    subsidies: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    subsidies?: undefined;
}>;
export declare function deleteSubsidies(Parse: any): (request: any) => Promise<{
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
