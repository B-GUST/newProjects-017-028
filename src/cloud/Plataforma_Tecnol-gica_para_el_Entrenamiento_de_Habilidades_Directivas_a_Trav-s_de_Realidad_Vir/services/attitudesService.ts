/* eslint-disable no-useless-catch */
/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createAttitudesData, deleteAttitudesData, getAttitudesByIdData, getAllAttitudesData, updateAttitudesData } from "../database/attitudes";


export async function getAllAttitudesService(page: number) {
  try {
    const data = await getAllAttitudesData(page);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAttitudesByIdService(objectId: string) {
  try {
    const data = await getAttitudesByIdData(objectId);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createAttitudesService(objectData: any) {
  try {
    const data = await createAttitudesData(objectData);

    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateAttitudesService(objectId: string, objectData: any) {
  try {
    const data = await updateAttitudesData(objectId, objectData);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteAttitudesService(objectId: string) {
  try {
    await deleteAttitudesData(objectId);
  } catch (error) {
    throw error;
  }
}