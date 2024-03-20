import Parse from 'parse/node';
import { IPerson } from '../models/person.interface';
import { validatePerson } from '../validators/validatePerson';
import { requireAuthentication } from '../utils/authHelpers';


Parse.Cloud.beforeSave('Person', async (request) => {
  
  try {
  // verificando si el usuario esta autenticado
  requireAuthentication(request);
  // Convertimos el objeto Parse a un objeto JavaScript
  const data = request.object.toJSON() as unknown as Partial<IPerson>;
  // Si request.original es undefined, entonces el objeto es nuevo
  const isNew = !request.original;
  const error = await validatePerson(data, isNew);
  if (error) {
    const errorObject = JSON.stringify(error);
    throw new Parse.Error(Parse.Error.VALIDATION_ERROR, JSON.parse(errorObject));
  }
} catch (error) {
  console.error('Error while saving the person:', error);
  throw error;
}
});
