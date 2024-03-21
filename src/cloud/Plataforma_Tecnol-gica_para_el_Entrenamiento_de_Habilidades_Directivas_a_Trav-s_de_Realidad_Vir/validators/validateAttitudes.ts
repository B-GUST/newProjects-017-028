/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-else-return */
import { IAttitudes } from '../models/attitudes.interface';
import { AttitudesSchema } from '../schemas/attitudesSchema';
import * as Yup from 'yup';

export async function validateAttitudes(attitudes: Partial<IAttitudes>, isNew: boolean) {
  try {
    if (isNew) {
      await AttitudesSchema.validate(attitudes, { abortEarly: false });
    } else {
      const schemaKeys = Object.keys(AttitudesSchema.fields);
      const validations = schemaKeys.map((key) => {
        if (key in attitudes) {
          const schema = Yup.reach(AttitudesSchema, key) as Yup.AnySchema;
          const attitudesKey = key as keyof typeof attitudes;
          return schema.validate(attitudes[attitudesKey]);
        }
      });
      await Promise.all(validations);
    }

    return null;
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      return {
        errors: error.errors,
        value: error.value,
      };
    } else {
      return {
        message: error.message,
      };
    }
  }
}