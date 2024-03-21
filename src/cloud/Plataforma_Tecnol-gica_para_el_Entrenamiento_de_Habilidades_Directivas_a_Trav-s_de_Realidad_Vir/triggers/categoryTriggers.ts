/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-console */
import Parse from 'parse/node';
import { ICategory} from '../models/category.interface';
import { validateCategory } from '../validators/validateCategory';
// import { requireAuthentication } from '../utils/authHelpers';

Parse.Cloud.beforeSave('category', async (request) => {
  try {

  // verificando si el usuario esta autenticado
  // requireAuthentication(request);
  // Convertimos el objeto Parse a un objeto JavaScript
  const data = request.object.toJSON() as unknown as Partial<ICategory>;
  // Si request.original es undefined, entonces el objeto es nuevo
  const isNew = !request.original;
  const error = await validateCategory(data, isNew);
  if (error) {
    const errorObject = JSON.stringify(error);
    throw new Parse.Error(Parse.Error.VALIDATION_ERROR, JSON.parse(errorObject));
  }
  
} catch (error) {
  console.error('Error while saving the lesiones:', error);
  throw error;
}
});