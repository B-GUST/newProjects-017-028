export declare function createDataController(Parse: any): (request: any) => Promise<{
    status: string;
    result: boolean;
    msg: string;
    errorDetails?: undefined;
} | {
    status: string;
    result: boolean;
    errorDetails: {
        code: any;
        message: any;
    };
    msg?: undefined;
}>;
