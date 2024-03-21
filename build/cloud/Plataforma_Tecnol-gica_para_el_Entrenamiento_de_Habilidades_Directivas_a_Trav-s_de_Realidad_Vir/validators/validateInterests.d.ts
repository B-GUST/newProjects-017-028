import { IInterests } from '../models/interests.interface';
export declare function validateInterests(interests: Partial<IInterests>, isNew: boolean): Promise<{
    errors: string[];
    value: any;
    message?: undefined;
} | {
    message: any;
    errors?: undefined;
    value?: undefined;
} | null>;
