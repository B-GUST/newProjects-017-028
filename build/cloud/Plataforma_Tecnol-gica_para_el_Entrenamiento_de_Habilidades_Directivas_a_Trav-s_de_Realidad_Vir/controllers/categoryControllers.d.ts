/// <reference types="parse" />
export declare function getAllCategory(Parse: any): (request: any) => Promise<{
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
export declare function getCategoryById(Parse: any): (request: any) => Promise<{
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
export declare function createCategory(Parse: any): (request: any) => Promise<{
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
export declare function updateCategory(Parse: any): (request: any) => Promise<{
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
export declare function deleteCategory(Parse: any): (request: any) => Promise<{
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
