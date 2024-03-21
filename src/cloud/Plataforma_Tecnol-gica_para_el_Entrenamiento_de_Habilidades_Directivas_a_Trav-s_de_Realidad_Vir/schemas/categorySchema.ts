import * as Yup from 'yup';

export const CategorySchema = Yup.object().shape({
    name: Yup.string().required('name is required'),
    description: Yup.string().required('description is required')
});