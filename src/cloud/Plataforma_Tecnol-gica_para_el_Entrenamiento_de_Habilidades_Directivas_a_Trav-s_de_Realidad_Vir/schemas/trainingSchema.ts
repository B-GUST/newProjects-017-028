import * as Yup from 'yup';

export const TrainingSchema = Yup.object().shape({
    tra_category_id: Yup.string().required('tra_category_id is required'),
    tra_title: Yup.string().required('tra_title is required'),
    tra_description: Yup.string().required('tra_description is required'),
    tra_estimated_duration: Yup.string().required('tra_estimated_duration is required'),
    tra_difficulty_level: Yup.string().required('tra_difficulty_level is required'),
    tra_objectives: Yup.string().required('tra_objectives is required'),
    tra_prerequisites: Yup.string().required('tra_prerequisites is required'),
    tra_date_created: Yup.string().required('tra_date_created is required'),
    tra_status: Yup.string().required('tra_status is required'),
});