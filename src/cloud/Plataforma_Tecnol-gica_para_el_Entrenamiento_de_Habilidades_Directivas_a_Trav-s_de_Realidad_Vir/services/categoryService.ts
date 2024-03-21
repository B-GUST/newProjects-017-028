/* eslint-disable no-useless-catch */
/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createCategoryData, deleteCategoryData, getCategoryByIdData, getAllCategoryData, updateCategoryData } from "../database/category";


export async function getAllCategoryService(page: number) {
  try {
    const data = await getAllCategoryData(page);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getCategoryByIdService(objectId: string) {
  try {
    const data = await getCategoryByIdData(objectId);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createCategoryService(objectData: any) {
  try {
    const data = await createCategoryData(objectData);

    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateCategoryService(objectId: string, objectData: any) {
  try {
    const data = await updateCategoryData(objectId, objectData);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteCategoryService(objectId: string) {
  try {
    await deleteCategoryData(objectId);
  } catch (error) {
    throw error;
  }
}