/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-else-return */
import { ITraining } from '../models/training.interface';
import { TrainingSchema } from '../schemas/trainingSchema';
import * as Yup from 'yup';

export async function validateTraining(training: Partial<ITraining>, isNew: boolean) {
  try {
    if (isNew) {
      await TrainingSchema.validate(training, { abortEarly: false });
    } else {
      const schemaKeys = Object.keys(TrainingSchema.fields);
      const validations = schemaKeys.map((key) => {
        if (key in training) {
          const schema = Yup.reach(TrainingSchema, key) as Yup.AnySchema;
          const trainingKey = key as keyof typeof training;
          return schema.validate(training[trainingKey]);
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