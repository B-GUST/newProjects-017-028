import { createAttitudesService, deleteAttitudesService, getAttitudesByIdService, getAllAttitudesService, updateAttitudesService } from "../services/attitudesService";

export function getAllAttitudes(Parse: any) {
  return async (request: any) => {
    try {
      const { page } = request.params;
      const data = await getAllAttitudesService(page);

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

export function getAttitudesById(Parse: any) {
  return async (request: any) => {
    try {
      const { objectId } = request.params;
      const data = await getAttitudesByIdService(objectId);

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

export function createAttitudes(Parse: any) {
  return async (request: any) => {
    try {
      const { objectData } = request.params;
      const data = await createAttitudesService(objectData);

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

export function updateAttitudes(Parse: any) {
  return async (request: any) => {
    try {
      const { objectId, objectData } = request.params;
      const data = await updateAttitudesService(objectId, objectData);

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

export function deleteAttitudes(Parse: any) {
  return async (request: any) => {
    try {
      const { objectId } = request.params;
      await deleteAttitudesService(objectId);

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