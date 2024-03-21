import { IAttitudes } from '../models/attitudes.interface';
export declare function validateAttitudes(attitudes: Partial<IAttitudes>, isNew: boolean): Promise<{
    errors: string[];
    value: any;
    message?: undefined;
} | {
    message: any;
    errors?: undefined;
    value?: undefined;
} | null>;
