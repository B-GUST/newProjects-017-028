import * as Yup from 'yup';

export const AttitudesSchema = Yup.object().shape({
    att_person_id: Yup.string().required('att_person_id is required'),
    att_previous_leadership_experience: Yup.string().required('att_previous_leadership_experience is required'),
    att_communication_skills: Yup.string().required('att_communication_skills is required'),
    att_decision_making_ability: Yup.string().required('att_decision_making_ability is required'),
    att_conflict_management: Yup.string().required('att_conflict_management is required'),
    att_motivation: Yup.string().required('att_motivation is required'),
});