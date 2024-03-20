
import {
    createSubsidieservice,
    deleteSubsidieservice,
    getAllSubsidiesService,
    getAdviceByIdService,
    updateSubsidieservice,
  } from '../services/subsidiesService';
  
  export function getAllSubsidies(Parse: any) {
    return async (request: any) => {
      try {
        const { page } = request.params;
        const subsidies = await getAllSubsidiesService(page);
  
        return {
          status: 'success',
          result: true,
          subsidies,
        };
      } catch (error) {
        console.error(`Error code: ${error.code}, Error message: ${error.message}`);
        return {
          status: 'error',
          result: false,
          errorDetails: {
            code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
            message: error.message,
          },
        };
      }
    };
  }
  
  export function getSubsidiesById(Parse: any) {
    return async (request: any) => {
      try {
        const { subsidiesId } = request.params;
        const subsidies = await getAdviceByIdService(subsidiesId);
  
        return {
          status: 'success',
          result: true,
          subsidies,
        };
      } catch (error) {
        console.error(`Error code: ${error.code}, Error message: ${error.message}`);
        return {
          status: 'error',
          result: false,
          errorDetails: {
            code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
            message: error.message,
          },
        };
      }
    };
  }
  
  export function createSubsidies(Parse: any) {
    return async (request: any) => {
      try {
        const { objectData } = request.params;
        const subsidies = await createSubsidieservice(objectData);
  
        return {
          status: 'success',
          result: true,
          subsidies,
        };
      } catch (error) {
        console.error(`Error code: ${error.code}, Error message: ${error.message}`);
        return {
          status: 'error',
          result: false,
          errorDetails: {
            code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
            message: error.message,
          },
        };
      }
    };
  }
  
  export function updateSubsidies(Parse: any) {
    return async (request: any) => {
      try {
        const { subsidiesId, objectData } = request.params;
        const subsidies = await updateSubsidieservice(subsidiesId, objectData);
  
        return {
          status: 'success',
          result: true,
          subsidies,
        };
      } catch (error) {
        console.error(`Error code: ${error.code}, Error message: ${error.message}`);
        return {
          status: 'error',
          result: false,
          errorDetails: {
            code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
            message: error.message,
          },
        };
      }
    };
  }
  
  export function deleteSubsidies(Parse: any) {
    return async (request: any) => {
      try {
        const { subsidiesId } = request.params;
        //const sessionToken = request.headers.authorization;
  
        await deleteSubsidieservice(subsidiesId);
  
        return {
          status: 'success',
          result: true,
        };
      } catch (error) {
        console.error(`Error code: ${error.code}, Error message: ${error.message}`);
        return {
          status: 'error',
          result: false,
          errorDetails: {
            code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
            message: error.message,
          },
        };
      }
    };
  }