/* eslint-disable no-useless-catch */
/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createTrainingData, deleteTrainingData, getTrainingByIdData, getAllTrainingsData, updateTrainingData } from "../database/training";


export async function getAllTrainingService(page: number) {
  try {
    const data = await getAllTrainingsData(page);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getTrainingByIdService(objectId: string) {
  try {
    const data = await getTrainingByIdData(objectId);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createTrainingService(objectData: any) {
  try {
    const data = await createTrainingData(objectData);

    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateTrainingService(objectId: string, objectData: any) {
  try {
    const data = await updateTrainingData(objectId, objectData);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteTrainingService(objectId: string) {
  try {
    await deleteTrainingData(objectId);
  } catch (error) {
    throw error;
  }
}