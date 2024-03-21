/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-else-return */
import { IInterests } from '../models/interests.interface';
import { InterestsSchema } from '../schemas/interestsSchema';
import * as Yup from 'yup';

export async function validateInterests(interests: Partial<IInterests>, isNew: boolean) {
  try {
    if (isNew) {
      await InterestsSchema.validate(interests, { abortEarly: false });
    } else {
      const schemaKeys = Object.keys(InterestsSchema.fields);
      const validations = schemaKeys.map((key) => {
        if (key in interests) {
          const schema = Yup.reach(InterestsSchema, key) as Yup.AnySchema;
          const interestsKey = key as keyof typeof interests;
          return schema.validate(interests[interestsKey]);
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