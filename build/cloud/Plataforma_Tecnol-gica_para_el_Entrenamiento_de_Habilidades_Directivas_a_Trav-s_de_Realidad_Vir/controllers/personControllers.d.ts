/// <reference types="parse" />
export declare function getAllPersons(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    persons: Parse.Object<Parse.Attributes>[];
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    persons?: undefined;
}>;
export declare function getPersonById(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    person: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    person?: undefined;
}>;
export declare function createPerson(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    person: any;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    person?: undefined;
}>;
export declare function updatePerson(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    person: Parse.Object<Parse.Attributes>;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    person?: undefined;
}>;
export declare function deletePerson(Parse: any): (request: any) => Promise<{
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
