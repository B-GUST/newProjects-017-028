import { ISubsidies } from '../models/subsidies.interface';
export declare function validateSubsidies(subsidies: Partial<ISubsidies>, isNew: boolean): Promise<{
    errors: string[];
    value: any;
    message?: undefined;
} | {
    message: any;
    errors?: undefined;
    value?: undefined;
} | null>;
