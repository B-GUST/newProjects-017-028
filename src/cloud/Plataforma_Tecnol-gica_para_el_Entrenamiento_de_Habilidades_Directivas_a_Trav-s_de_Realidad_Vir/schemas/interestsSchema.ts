import * as Yup from 'yup';

export const InterestsSchema = Yup.object().shape({
    variable_interest_1: Yup.string().required('variable_interest_1 is required'),
    variable_interest_2: Yup.string().required('variable_interest_2 is required'),
    variable_interest_3: Yup.string().required('variable_interest_3 is required'),
    variable_interest_4: Yup.string().required('variable_interest_4 is required')
});