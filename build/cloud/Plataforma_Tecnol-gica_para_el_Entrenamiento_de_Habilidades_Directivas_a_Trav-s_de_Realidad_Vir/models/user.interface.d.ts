export interface IUser {
    username: string;
    password: string;
    email: string;
    phone: string;
    user_interests: UserInterests[];
    user_birthdate: Date;
    user_demographics: UserDemographics;
    user_type: string;
    user_businessid: string;
    user_businessdocument: string;
    user_namecompany: string;
}
interface UserInterests {
    category: string;
    subcategory: string;
    additionalField1: string;
    additionalField2: string;
}
interface UserDemographics {
    age: number;
    gender: string;
    location: UserLocation;
}
interface UserLocation {
    country: string;
    province: string;
}
export {};
