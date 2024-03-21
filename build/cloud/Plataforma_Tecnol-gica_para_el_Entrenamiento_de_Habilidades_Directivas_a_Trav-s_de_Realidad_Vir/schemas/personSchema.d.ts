import * as Yup from 'yup';
export declare const PersonSchema: Yup.ObjectSchema<{
    per_user_id: {
        objectId: string;
        __type: string;
        className: string;
    };
    per_interests: string;
}, Yup.AnyObject, {
    per_user_id: {
        __type: undefined;
        className: undefined;
        objectId: undefined;
    };
    per_interests: undefined;
}, "">;
