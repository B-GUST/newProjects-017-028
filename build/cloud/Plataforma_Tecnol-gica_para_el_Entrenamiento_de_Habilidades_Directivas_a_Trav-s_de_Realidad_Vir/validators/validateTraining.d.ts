import { ITraining } from '../models/training.interface';
export declare function validateTraining(training: Partial<ITraining>, isNew: boolean): Promise<{
    errors: string[];
    value: any;
    message?: undefined;
} | {
    message: any;
    errors?: undefined;
    value?: undefined;
} | null>;
