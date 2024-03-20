import { ISubsidies } from '../models/subsidies.interface';
import { SubsidiesSchema } from '../schemas/subsidiesSchema';
import * as Yup from 'yup';

export async function validateSubsidies(subsidies: Partial<ISubsidies>, isNew: boolean) {
  try {
    if (isNew) {
      await SubsidiesSchema.validate(subsidies, { abortEarly: false });
    } else {
      const schemaKeys = Object.keys(SubsidiesSchema.fields);
      const validations = schemaKeys.map((key) => {
        if (key in subsidies) {
          const schema = Yup.reach(SubsidiesSchema, key) as Yup.AnySchema;
          const subsidiesKey = key as keyof typeof subsidies;
          return schema.validate(subsidies[subsidiesKey]);
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
