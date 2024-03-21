import { createInterestsService, deleteInterestsService, getInterestsByIdService, getAllInterestsService, updateInterestsService } from "../services/interestsService";

export function getAllInterests(Parse: any) {
  return async (request: any) => {
    try {
      const { page } = request.params;
      const data = await getAllInterestsService(page);

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

export function getInterestsById(Parse: any) {
  return async (request: any) => {
    try {
      const { objectId } = request.params;
      const data = await getInterestsByIdService(objectId);

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

export function createInterests(Parse: any) {
  return async (request: any) => {
    try {
      const { objectData } = request.params;
      const data = await createInterestsService(objectData);

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

export function updateInterests(Parse: any) {
  return async (request: any) => {
    try {
      const { objectId, objectData } = request.params;
      const data = await updateInterestsService(objectId, objectData);

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

export function deleteInterests(Parse: any) {
  return async (request: any) => {
    try {
      const { objectId } = request.params;
      await deleteInterestsService(objectId);

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