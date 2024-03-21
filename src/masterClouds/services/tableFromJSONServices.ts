/* eslint-disable no-console */
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Parse from 'parse/node';
import {
  registerTableFromJSONData,
  deleteTableFromJSONData,
  getAllTableFromJSONData,
  getTableFromJSONByIdData,
  updateTableFromJSONData,
} from '../database/tableFromJSON';
import { checkUserRole } from '../../cloud/Plataforma_Tecnol-gica_para_el_Entrenamiento_de_Habilidades_Directivas_a_Trav-s_de_Realidad_Vir/utils/accesControl';

export async function getAllTableFromJSONService(page: number, tableName: string, sessionToken: string) {
  try {
    const permission = await checkUserRole(sessionToken, ['superuser', 'admin', 'ia']);

    if (!permission) {
      throw new Parse.Error(Parse.Error.OPERATION_FORBIDDEN, `User does not have permission to delete users.`);
    }

    const tables = await getAllTableFromJSONData(page, tableName);
    return tables;
  } catch (error) {
    throw error;
  }
}

export async function getTableFromJSONByIdService(tableFromJSONId: string, tableName: string, sessionToken: string) {
  try {
    const permission = await checkUserRole(sessionToken, ['superuser', 'admin', 'ia']);

    if (!permission) {
      throw new Parse.Error(Parse.Error.OPERATION_FORBIDDEN, `User does not have permission to delete users.`);
    }

    const table = await getTableFromJSONByIdData(tableFromJSONId, tableName);
    return table;
  } catch (error) {
    throw error;
  }
}

export async function registerTableFromJSONService(tablename: string, data: any, sessionToken: string) {
  try {
    const permission = await checkUserRole(sessionToken, ['superuser', 'admin', 'ia']);

    if (!permission) {
      throw new Parse.Error(Parse.Error.OPERATION_FORBIDDEN, `User does not have permission to delete users.`);
    }

    const store = await registerTableFromJSONData(tablename, data);

    return store;
  } catch (error) {
    throw error;
  }
}

export async function updateTableFromJSONService(
  tableFromJSONId: string,
  data: any,
  tableName: string,
  sessionToken: string,
) {
  try {
    const permission = await checkUserRole(sessionToken, ['superuser', 'admin', 'ia']);

    if (!permission) {
      throw new Parse.Error(Parse.Error.OPERATION_FORBIDDEN, `User does not have permission to delete users.`);
    }

    const table = await updateTableFromJSONData(tableFromJSONId, data, tableName);
    return table;
  } catch (error) {
    throw error;
  }
}

export async function deleteTableFromJSONService(tableFromJSONId: string, tableName: string, sessionToken: string) {
  try {
    const permission = await checkUserRole(sessionToken, ['superuser', 'admin', 'ia']);

    if (!permission) {
      throw new Parse.Error(Parse.Error.OPERATION_FORBIDDEN, `User does not have permission to delete users.`);
    }

    await deleteTableFromJSONData(tableFromJSONId, tableName);
  } catch (error) {
    throw error;
  }
}
