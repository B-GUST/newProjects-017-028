"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategoryById = exports.getAllCategory = void 0;
const categoryService_1 = require("../services/categoryService");
function getAllCategory(Parse) {
    return async (request) => {
        try {
            const { page } = request.params;
            const data = await (0, categoryService_1.getAllCategoryService)(page);
            return {
                status: 'success',
                result: true,
                data,
            };
        }
        catch (error) {
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
exports.getAllCategory = getAllCategory;
function getCategoryById(Parse) {
    return async (request) => {
        try {
            const { objectId } = request.params;
            const data = await (0, categoryService_1.getCategoryByIdService)(objectId);
            return {
                status: 'success',
                result: true,
                data,
            };
        }
        catch (error) {
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
exports.getCategoryById = getCategoryById;
function createCategory(Parse) {
    return async (request) => {
        try {
            const { objectData } = request.params;
            const data = await (0, categoryService_1.createCategoryService)(objectData);
            return {
                status: 'success',
                result: true,
                data,
            };
        }
        catch (error) {
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
exports.createCategory = createCategory;
function updateCategory(Parse) {
    return async (request) => {
        try {
            const { objectId, objectData } = request.params;
            const data = await (0, categoryService_1.updateCategoryService)(objectId, objectData);
            return {
                status: 'success',
                result: true,
                data,
            };
        }
        catch (error) {
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
exports.updateCategory = updateCategory;
function deleteCategory(Parse) {
    return async (request) => {
        try {
            const { objectId } = request.params;
            await (0, categoryService_1.deleteCategoryService)(objectId);
            return {
                status: 'success',
                result: true,
            };
        }
        catch (error) {
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
exports.deleteCategory = deleteCategory;
//# sourceMappingURL=categoryControllers.js.map