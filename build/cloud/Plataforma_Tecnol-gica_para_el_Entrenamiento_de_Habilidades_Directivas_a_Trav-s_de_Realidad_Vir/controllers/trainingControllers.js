"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTraining = exports.updateTraining = exports.createTraining = exports.getTrainingById = exports.getAllTraining = void 0;
const trainingService_1 = require("../services/trainingService");
function getAllTraining(Parse) {
    return async (request) => {
        try {
            const { page } = request.params;
            const data = await (0, trainingService_1.getAllTrainingService)(page);
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
exports.getAllTraining = getAllTraining;
function getTrainingById(Parse) {
    return async (request) => {
        try {
            const { objectId } = request.params;
            const data = await (0, trainingService_1.getTrainingByIdService)(objectId);
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
exports.getTrainingById = getTrainingById;
function createTraining(Parse) {
    return async (request) => {
        try {
            const { objectData } = request.params;
            const data = await (0, trainingService_1.createTrainingService)(objectData);
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
exports.createTraining = createTraining;
function updateTraining(Parse) {
    return async (request) => {
        try {
            const { objectId, objectData } = request.params;
            const data = await (0, trainingService_1.updateTrainingService)(objectId, objectData);
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
exports.updateTraining = updateTraining;
function deleteTraining(Parse) {
    return async (request) => {
        try {
            const { objectId } = request.params;
            await (0, trainingService_1.deleteTrainingService)(objectId);
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
exports.deleteTraining = deleteTraining;
//# sourceMappingURL=trainingControllers.js.map