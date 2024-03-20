
import { createSubsidiesData, deleteSubsidiesData, updateSubsidiesData, getAllSubsidiesData, getSubsidiesByIdData } from "../database/subsidies";


  
  export async function getAllSubsidiesService(page: number) {
    try {
      const data = await getAllSubsidiesData(page);
      return data;
    } catch (error) {
      throw error;
    }
  }
  export async function getAdviceByIdService(objectId: string) {
    try {
      const data = await getSubsidiesByIdData(objectId);
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function createSubsidieservice(objectData: any) {
    try {
      const data = await createSubsidiesData(objectData);
  
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function updateSubsidieservice(objectId: string, objectData: any) {
    try {
      const data = await updateSubsidiesData(objectId, objectData);
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function deleteSubsidieservice(objectId: string) {
    try {
      await deleteSubsidiesData(objectId);
    } catch (error) {
      throw error;
    }
  }
  