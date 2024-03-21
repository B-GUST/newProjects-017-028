import * as Yup from 'yup';
export declare const UserSchema: Yup.ObjectSchema<{
    username: string;
    password: string;
    email: string;
    user_type: Yup.Maybe<string | undefined>;
    user_businessid: Yup.Maybe<string | undefined>;
    user_businessdocument: Yup.Maybe<string | undefined>;
    user_namecompany: Yup.Maybe<string | undefined>;
    phone: Yup.Maybe<string | undefined>;
    user_interests: Yup.Maybe<{
        category?: Yup.Maybe<string | undefined>;
        subcategory?: Yup.Maybe<string | undefined>;
        additionalField1?: Yup.Maybe<string | undefined>;
        additionalField2?: Yup.Maybe<string | undefined>;
    }[] | undefined>;
    user_birthdate: Yup.Maybe<{} | undefined>;
    user_demographics: {
        age?: Yup.Maybe<number | undefined>;
        gender?: Yup.Maybe<string | undefined>;
        location: {
            country?: Yup.Maybe<string | undefined>;
            province?: Yup.Maybe<string | undefined>;
        };
    };
}, Yup.AnyObject, {
    username: undefined;
    password: undefined;
    email: undefined;
    user_type: undefined;
    user_businessid: undefined;
    user_businessdocument: undefined;
    user_namecompany: undefined;
    phone: undefined;
    user_interests: "";
    user_birthdate: undefined;
    user_demographics: {
        age: undefined;
        gender: undefined;
        location: {
            country: undefined;
            province: undefined;
        };
    };
}, "">;
