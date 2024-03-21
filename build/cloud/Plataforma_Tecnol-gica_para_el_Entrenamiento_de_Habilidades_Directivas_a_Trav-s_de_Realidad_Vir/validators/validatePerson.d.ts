import { IPerson } from '../models/person.interface';
export declare function validatePerson(person: Partial<IPerson>, isNew: boolean): Promise<{
    errors: string[];
    value: any;
    message?: undefined;
} | {
    message: any;
    errors?: undefined;
    value?: undefined;
} | null>;
