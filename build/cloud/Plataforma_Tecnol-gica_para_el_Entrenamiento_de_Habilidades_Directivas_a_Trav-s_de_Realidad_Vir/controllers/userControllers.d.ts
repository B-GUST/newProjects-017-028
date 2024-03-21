/// <reference types="parse" />
export declare function getAllUsers(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    users: Parse.Object<Parse.Attributes>[];
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    users?: undefined;
}>;
export declare function getUserById(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    user: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    user?: undefined;
}>;
export declare function createUserNew(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    user: any;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    user?: undefined;
}>;
export declare function updateUser(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    user: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    user?: undefined;
}>;
export declare function deleteUser(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    message: string;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    message?: undefined;
}>;
