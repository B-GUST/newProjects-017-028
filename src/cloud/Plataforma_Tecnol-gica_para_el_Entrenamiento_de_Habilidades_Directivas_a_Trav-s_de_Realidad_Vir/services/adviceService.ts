
import { createAdviceData, deleteAdviceData, getAdviceByIdData, getAllAdvicesData, updateAdviceData } from "../database/advices";


  
  export async function getAllAdvicesService(page: number) {
    try {
      const data = await getAllAdvicesData(page);
      return data;
    } catch (error) {
      throw error;
    }
  }
  export async function getAdviceByIdService(objectId: string) {
    try {
      const data = await getAdviceByIdData(objectId);
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function createAdviceService(objectData: any) {
    try {
      const data = await createAdviceData(objectData);
  
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function updateAdviceService(objectId: string, objectData: any) {
    try {
      const data = await updateAdviceData(objectId, objectData);
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function deleteAdviceService(objectId: string) {
    try {
      await deleteAdviceData(objectId);
    } catch (error) {
      throw error;
    }
  }
  