import { ICategory } from '../models/category.interface';
export declare function validateCategory(category: Partial<ICategory>, isNew: boolean): Promise<{
    errors: string[];
    value: any;
    message?: undefined;
} | {
    message: any;
    errors?: undefined;
    value?: undefined;
} | null>;
