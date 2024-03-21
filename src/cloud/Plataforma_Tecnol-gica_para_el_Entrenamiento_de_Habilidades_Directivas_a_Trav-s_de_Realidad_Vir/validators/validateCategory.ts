/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-else-return */
import { ICategory } from '../models/category.interface';
import { CategorySchema } from '../schemas/categorySchema';
import * as Yup from 'yup';

export async function validateCategory(category: Partial<ICategory>, isNew: boolean) {
  try {
    if (isNew) {
      await CategorySchema.validate(category, { abortEarly: false });
    } else {
      const schemaKeys = Object.keys(CategorySchema.fields);
      const validations = schemaKeys.map((key) => {
        if (key in category) {
          const schema = Yup.reach(CategorySchema, key) as Yup.AnySchema;
          const categoryKey = key as keyof typeof category;
          return schema.validate(category[categoryKey]);
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