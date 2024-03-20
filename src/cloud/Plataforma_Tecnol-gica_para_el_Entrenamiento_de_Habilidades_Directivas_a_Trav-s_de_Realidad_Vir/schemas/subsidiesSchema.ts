import * as Yup from 'yup';

export const SubsidiesSchema = Yup.object().shape({
    sub_code_bdns: Yup.string().required('The sub_code_bdns is required'),
    sub_administrative_entities: Yup.string().required('The sub_administrative_entities is required'),
    sub_registration_dates: Yup.string().required('The sub_registration_dates is required'),
    sub_title: Yup.string().required('The sub_title is required'),
    sub_detail: Yup.string().required('The sub_detail is required'),
    sub_url: Yup.string().required('The sub_url is required'),
});