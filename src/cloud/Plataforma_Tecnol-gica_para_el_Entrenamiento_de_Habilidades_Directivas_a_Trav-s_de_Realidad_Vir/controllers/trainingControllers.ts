import { createTrainingService, deleteTrainingService, getTrainingByIdService, getAllTrainingService, updateTrainingService } from "../services/trainingService";

export function getAllTraining(Parse: any) {
  return async (request: any) => {
    try {
      const { page } = request.params;
      const data = await getAllTrainingService(page);

      return {
        status: 'success',
        result: true,
        data,
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

export function getTrainingById(Parse: any) {
  return async (request: any) => {
    try {
      const { objectId } = request.params;
      const data = await getTrainingByIdService(objectId);

      return {
        status: 'success',
        result: true,
        data,
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

export function createTraining(Parse: any) {
  return async (request: any) => {
    try {
      const { objectData } = request.params;
      const data = await createTrainingService(objectData);

      return {
        status: 'success',
        result: true,
        data,
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

export function updateTraining(Parse: any) {
  return async (request: any) => {
    try {
      const { objectId, objectData } = request.params;
      const data = await updateTrainingService(objectId, objectData);

      return {
        status: 'success',
        result: true,
        data,
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

export function deleteTraining(Parse: any) {
  return async (request: any) => {
    try {
      const { objectId } = request.params;
      await deleteTrainingService(objectId);

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