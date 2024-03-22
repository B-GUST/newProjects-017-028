import * as Yup from 'yup';
export declare const TrainingSchema: Yup.ObjectSchema<{
    tra_category_id: string;
    tra_title: string;
    tra_description: string;
    tra_estimated_duration: string;
    tra_difficulty_level: string;
    tra_objectives: string;
    tra_prerequisites: string;
    tra_date_created: string;
    tra_status: string;
    tra_image: string;
}, Yup.AnyObject, {
    tra_category_id: undefined;
    tra_title: undefined;
    tra_description: undefined;
    tra_estimated_duration: undefined;
    tra_difficulty_level: undefined;
    tra_objectives: undefined;
    tra_prerequisites: undefined;
    tra_date_created: undefined;
    tra_status: undefined;
    tra_image: undefined;
}, "">;
