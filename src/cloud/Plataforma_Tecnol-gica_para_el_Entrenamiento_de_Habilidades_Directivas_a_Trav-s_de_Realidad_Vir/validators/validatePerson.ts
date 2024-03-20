import { IPerson } from '../models/person.interface';
import { PersonSchema } from '../schemas/personSchema';
import * as Yup from 'yup';

export async function validatePerson(person: Partial<IPerson>, isNew: boolean) {
  try {
    // Si la persona es nueva, validamos todos los campos
    if (isNew) {
      // !La opción { abortEarly: false } en Yup permite continuar la validación después del primer error,
      // !recogiendo todos los errores en lugar de detenerse en el primero. Esto es útil para mostrar todos
      // !!los errores de una vez, especialmente en formularios de usuario, permitiendo corregir todos los errores en una sola pasada.
      await PersonSchema.validate(person, { abortEarly: false });
    } else {
      // Si la persona no es nueva, validamos solo los campos presentes
      const schemaKeys = Object.keys(PersonSchema.fields);
      const validations = schemaKeys.map((key) => {
        if (key in person) {
          const schema = Yup.reach(PersonSchema, key) as Yup.AnySchema;
          const personKey = key as keyof typeof person;
          return schema.validate(person[personKey]);
        }
      });
      await Promise.all(validations);
    }
    // Si todo está bien, no devolvemos nada
    return null;
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      //? Este es un error de validación de Yup
      //! solo selecciono las propiedades del error que quiero ver porque si
      //! retornamos el objeto error completo trae informacion que no es necesario
      return {
        errors: error.errors,
        value: error.value,
      };
    } else {
      //? Esto sirve para lanzar el error personalizado
      return {
        message: error.message,
      };
    }
  }
}