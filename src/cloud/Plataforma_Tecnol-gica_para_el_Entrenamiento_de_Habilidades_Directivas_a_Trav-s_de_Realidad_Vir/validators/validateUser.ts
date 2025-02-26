import { IUser } from '../models/user.interface';
import { UserSchema } from '../schemas/userSchema';
import * as Yup from 'yup';

export async function validateUser(user: Partial<IUser>, isNew: boolean) {
  try {
    if (isNew) {
      // Validar el esquema principal
      await UserSchema.validate(user, { abortEarly: false });
    } else {
      // Validar solo los campos presentes en el esquema
      const schemaKeys = Object.keys(UserSchema.fields);
      const validations = schemaKeys.map((key) => {
        if (key in user) {
          const schema = Yup.reach(UserSchema, key) as Yup.AnySchema;
          const userKey = key as keyof typeof user;
          return schema.validate(user[userKey]);
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