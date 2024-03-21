"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSubsidies = exports.updateSubsidies = exports.createSubsidies = exports.getSubsidiesById = exports.getAllSubsidies = void 0;
const subsidiesService_1 = require("../services/subsidiesService");
function getAllSubsidies(Parse) {
    return async (request) => {
        try {
            const { page } = request.params;
            const subsidies = await (0, subsidiesService_1.getAllSubsidiesService)(page);
            return {
                status: 'success',
                result: true,
                subsidies,
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
exports.getAllSubsidies = getAllSubsidies;
function getSubsidiesById(Parse) {
    return async (request) => {
        try {
            const { subsidiesId } = request.params;
            const subsidies = await (0, subsidiesService_1.getAdviceByIdService)(subsidiesId);
            return {
                status: 'success',
                result: true,
                subsidies,
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
exports.getSubsidiesById = getSubsidiesById;
function createSubsidies(Parse) {
    return async (request) => {
        try {
            const { objectData } = request.params;
            const subsidies = await (0, subsidiesService_1.createSubsidieservice)(objectData);
            return {
                status: 'success',
                result: true,
                subsidies,
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
exports.createSubsidies = createSubsidies;
function updateSubsidies(Parse) {
    return async (request) => {
        try {
            const { subsidiesId, objectData } = request.params;
            const subsidies = await (0, subsidiesService_1.updateSubsidieservice)(subsidiesId, objectData);
            return {
                status: 'success',
                result: true,
                subsidies,
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
exports.updateSubsidies = updateSubsidies;
function deleteSubsidies(Parse) {
    return async (request) => {
        try {
            const { subsidiesId } = request.params;
            //const sessionToken = request.headers.authorization;
            await (0, subsidiesService_1.deleteSubsidieservice)(subsidiesId);
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
exports.deleteSubsidies = deleteSubsidies;
//# sourceMappingURL=subsidiesControllers.js.map