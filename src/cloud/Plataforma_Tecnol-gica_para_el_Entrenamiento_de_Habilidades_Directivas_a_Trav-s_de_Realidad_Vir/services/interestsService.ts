/* eslint-disable no-useless-catch */
/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createInterestsData, deleteInterestsData, getInterestsByIdData, getAllInterestsData, updateInterestsData } from "../database/interests";


export async function getAllInterestsService(page: number) {
  try {
    const data = await getAllInterestsData(page);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getInterestsByIdService(objectId: string) {
  try {
    const data = await getInterestsByIdData(objectId);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createInterestsService(objectData: any) {
  try {
    const data = await createInterestsData(objectData);

    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateInterestsService(objectId: string, objectData: any) {
  try {
    const data = await updateInterestsData(objectId, objectData);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteInterestsService(objectId: string) {
  try {
    await deleteInterestsData(objectId);
  } catch (error) {
    throw error;
  }
}