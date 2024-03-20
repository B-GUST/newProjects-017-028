
// import Parse from 'parse/node';
import { createPersonData, deletePersonData, getAllPersonsData, getPersonByIdData, updatePersonData } from '../database/person';
// import { assignRoleToUser } from '../utils/assignRoles';
// import { checkUserRole } from '../utils/accesControl';

export async function getAllPersonsService(page: number) {
  try {
    const persons = await getAllPersonsData(page);
    return persons;
  } catch (error) {
    throw error;
  }
}

export async function getPersonByIdService(personId: string) {
  try {
    const person = await getPersonByIdData(personId);
    return person;
  } catch (error) {
    throw error;
  }
}

export async function createPersonService(objectData: any) {
  try {
    const person = await createPersonData(objectData);

    //Asignar un rol por defecto al nuevo usuario
    // await assignRoleToUser(person, 'user');
    return person;
  } catch (error) {
    throw error;
  }
}

export async function updatePersonService(personId: string, objectData: any) {
  try {
    const person = await updatePersonData(personId, objectData);
    return person;
  } catch (error) {
    throw error;
  }
}

export async function deletePersonService(objectId: string) {
  try {

    await deletePersonData(objectId);
  } catch (error) {
    throw error;
  }
}