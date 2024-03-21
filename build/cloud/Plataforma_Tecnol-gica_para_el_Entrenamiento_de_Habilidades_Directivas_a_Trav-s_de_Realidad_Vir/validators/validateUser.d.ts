import { IUser } from '../models/user.interface';
export declare function validateUser(user: Partial<IUser>, isNew: boolean): Promise<{
    errors: string[];
    value: any;
    message?: undefined;
} | {
    message: any;
    errors?: undefined;
    value?: undefined;
} | null>;
