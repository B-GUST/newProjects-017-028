import Parse from 'parse/node';
import { ISubsidies } from '../models/subsidies.interface';
import { validateSubsidies } from '../validators/validateSubsidies';
import { requireAuthentication } from '../utils/authHelpers';


Parse.Cloud.beforeSave('subsidies', async (request) => {
  try{
  // verificando si el usuario esta autenticado
  requireAuthentication(request);
  // Convertimos el objeto Parse a un objeto JavaScript
  const data = request.object.toJSON() as unknown as Partial<ISubsidies>;
  // Si request.original es undefined, entonces el objeto es nuevo
  const isNew = !request.original;
  const error = await validateSubsidies(data, isNew);
  if (error) {
    const errorObject = JSON.stringify(error);
    throw new Parse.Error(Parse.Error.VALIDATION_ERROR, JSON.parse(errorObject));
  }

}catch (error) {
  console.error('Error while saving the subsidies:', error);
  throw error;
}
});

