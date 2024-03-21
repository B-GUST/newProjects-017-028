import { createCategoryService, deleteCategoryService, getCategoryByIdService, getAllCategoryService, updateCategoryService } from "../services/categoryService";

export function getAllCategory(Parse: any) {
  return async (request: any) => {
    try {
      const { page } = request.params;
      const data = await getAllCategoryService(page);

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

export function getCategoryById(Parse: any) {
  return async (request: any) => {
    try {
      const { objectId } = request.params;
      const data = await getCategoryByIdService(objectId);

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

export function createCategory(Parse: any) {
  return async (request: any) => {
    try {
      const { objectData } = request.params;
      const data = await createCategoryService(objectData);

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

export function updateCategory(Parse: any) {
  return async (request: any) => {
    try {
      const { objectId, objectData } = request.params;
      const data = await updateCategoryService(objectId, objectData);

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

export function deleteCategory(Parse: any) {
  return async (request: any) => {
    try {
      const { objectId } = request.params;
      await deleteCategoryService(objectId);

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